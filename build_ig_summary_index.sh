#!/bin/bash

# Set the output file name
output_file="index.md"

# Remove the output file if it already exists
rm -f "$output_file"

# Loop through all .md files in the current directory
for file in *.md; do
    # Skip the output file itself
    if [ "$file" != "$output_file" ]; then
        # Add a separator if the output file is not empty
        if [ -s "$output_file" ]; then
            echo -e "\n---\n" >> "$output_file"
        fi
        
        # Extract the IG name (filename without .md extension)
        ig_name="${file%.md}"
        
        # Add the header with links to the IG and its source
        echo -e "# [${ig_name}](https://build.fhir.org/ig/HL7/${ig_name}) ([source](https://github.com/HL7/${ig_name}))\n" >> "$output_file"
        
        # Append the content of the current file to the output file
        cat "$file" >> "$output_file"
    fi
done

echo "IG summary index has been created in $output_file"