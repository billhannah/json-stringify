# JSON Stringify

Simple command-line utility for helping with posting JSON as a string.

Reads the input of a JSON file and escapes the JSON object in the contents.

The result will be written to the console (default) or to a file (`-o`, `--out`)

To install:
```shell
cd {path/to/repo}
npm install -g .
```

Usage:
```shell
json-stringify -h

> Usage: json-stringify -f <inputFilename> -o <outputFilename>]

Options:
      --version  Show version number                                   [boolean]
  -f, --file     File to read                                         [required]
  -o, --out      File name for output of command
  -h, --help     Show help                                             [boolean]

Examples:
  json-stringify -f foo.json -o foo.txt  Transform the JSON object in foo.json
                                         into an escaped string written to
                                         foo.txt
  json-stringify -f foo.json             Transform the JSON object in foo.json
                                         into an escaped string written to the
                                         console
```
