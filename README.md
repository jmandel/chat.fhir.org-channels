# Zulip Channel Summarizer

This project fetches data from Zulip channels, summarizes them using Google's Vertex AI, and generates a concise list of channels with their descriptions and keywords.

## Prerequisites

- Node.js and npm (or bun) installed
- A Zulip account with API access
- Google Cloud account with Vertex AI enabled
- jq command-line JSON processor

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/zulip-channel-summarizer.git
   cd zulip-channel-summarizer
   ```

2. Install dependencies:
   ```
   bun install
   ```

3. Create a `zuliprc` file in the project root with your Zulip API credentials:
   ```
   [api]
   email=your-email@example.com
   key=your-api-key
   site=https://your-zulip-server.zulipchat.com
   ```

4. Set up Google Cloud credentials. You have two options:

   Option 1: Use a service account key file
   - Create a service account and download the JSON key file
   - Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the path of your key file:
     ```
     export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/keyfile.json"
     ```

   Option 2: Use gcloud CLI (recommended for development)
   - Install the [gcloud CLI](https://cloud.google.com/sdk/docs/install) if you haven't already
   - Run the following command to log in and set up application default credentials:
     ```
     gcloud auth application-default login
     ```
   - This will open a browser window for you to authenticate with your Google account

   Choose the option that best fits your development environment and security requirements.

## Usage

1. Fetch channel data from Zulip:
   ```
   bun run index.ts > db.json
   ```

2. Generate summaries using Vertex AI:
   ```
   bun run summarize.ts > summaries.json
   ```

3. Create a consolidated channels.json file:
   ```
   jq -s '{ 
     channels: map({
       channelName: .name,
       channelId: .id,
       channelDescription: (.candidates[0].content.parts[0].text | fromjson).channelDescription,
       keywords: (.candidates[0].content.parts[0].text | fromjson).keywords
     })
   }' summaries.json > channels.json
   ```

4. Create a consolidate channels.txt file:
    ```
    jq -r '
    .channels[] | (
    "Channel Name: \(.channelName)\n" +
    "Channel ID: \(.channelId)\n" +
    "Description: \(.channelDescription)\n" +
    "Keywords:\n" +
    (.keywords | map("- " + .) | join("\n")) +
    "\n\n"
    )' channels.json
    ```

## File Descriptions

- `index.ts`: Fetches channel data from Zulip and saves it to `db.json`
- `summarize.ts`: Processes the data in `db.json`, generates summaries using Vertex AI, and saves the results to `summaries.json`
- `db.json`: Raw channel data from Zulip (ndjson)
- `summaries.json`: Generated summaries for each channel (ndjson)
- `channels.json`: Consolidated file with channel names, IDs, keywords, and descriptions

## Notes

- The scripts are designed to be idempotent. They will skip processing for channels that have already been handled in previous runs.
- Ensure you have sufficient quota and permissions in your Google Cloud project to use Vertex AI.
- The summarization process may take some time depending on the number of channels and the complexity of the content.

## Troubleshooting

- If you encounter authentication issues with Zulip, double-check your `zuliprc` file.
- For Google Cloud errors, ensure your service account has the necessary permissions and your `GOOGLE_APPLICATION_CREDENTIALS` is set correctly.
- If `jq` command fails, make sure it's installed on your system and the `summaries.json` file is properly formatted.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
