#!/bin/bash

SOURCE_DIR="archive/fonts"
TARGET_DIR="public/fonts"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Count files
count=0

# Move and rename files
for file in "$SOURCE_DIR"/*-subset.woff2; do
  # Check if any files match (handles case where no files exist)
  if [ ! -e "$file" ]; then
    echo "No subset fonts found in $SOURCE_DIR"
    exit 0
  fi
  
  filename=$(basename "$file")
  newname="${filename%-subset.woff2}.woff2"
  
  mv "$file" "$TARGET_DIR/$newname"
  echo "✓ Moved: $filename → $newname"
  ((count++))
done

echo ""
echo "✓ Successfully moved $count font(s)"