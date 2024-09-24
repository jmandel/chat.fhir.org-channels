import zulipInit from "zulip-js";
import { readFileSync, writeFileSync, existsSync } from "fs";

// Pass the path to your zuliprc file here.
const config = { zuliprc: "zuliprc" };

const outputFilePath = "db.json";

// Read existing channel IDs if the file exists
const existingChannels = new Set(
  existsSync(outputFilePath)
    ? readFileSync(outputFilePath, "utf-8")
        .split("\n")
        .filter(line => line.trim() !== "")
        .map(line => JSON.parse(line).id)
    : []
);

console.log(existingChannels.size);

async function fetchChannelData() {
  const client = await zulipInit(config);

  // Get all public channels t
  const response = await client.streams.retrieve({ include_public: true, include_subscribed: false });
//   console.log(response);

  const channels = response.streams;

  for (const channel of channels) {
    // Skip if already processed
    if (existingChannels.has(channel.stream_id)) {
        console.error("skipping", channel.stream_id, channel.name);
        continue;
    }


    const messagesResponse = await client.messages.retrieve({
      anchor: "newest",
      num_before: 500,
      num_after: 0,
      narrow: [{ operator: "channel", operand: channel.stream_id }]
    });

    const messages = messagesResponse.messages;
    if (!messages?.length) continue;

    const subjects = new Map<string, string>();

    for (const message of messages) {
      if (!subjects.has(message.subject)) {
        subjects.set(message.subject, message.content.slice(0, 1000));
      }
    }

    const summaries = Array.from(subjects.entries()).map(([subject, extract]) => ({
      subject,
      extract
    }));

    const streamData = {
      id: channel.stream_id,
      name: channel.name,
      description: channel.description,
      summaries,
      messages: messages.map(message => ({
        id: message.id,
        sender_full_name: message.sender_full_name,
        content: message.content,
        subject: message.subject,
        timestamp: message.timestamp
      }))
    };

    console.log(JSON.stringify(streamData));
  }
}

// Run the channel data fetching
fetchChannelData().catch(console.error);

