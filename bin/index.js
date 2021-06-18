#!/usr/bin/env node

const fArg = 'f';
const oArg = 'o';
const hArg = 'h';

const argv = require('yargs/yargs')(process.argv.slice(2))
	.usage('Usage: json-stringify -f <inputFilename> -o <outputFilename>]')
	.example('json-stringify -f foo.json -o foo.txt', 'Transform the JSON object in foo.json into an escaped string written to foo.txt')
	.example('json-stringify -f foo.json', 'Transform the JSON object in foo.json into an escaped string written to the console')
	.alias(fArg, 'file')
	.alias(oArg, 'out')
	.nargs(fArg, 1)
	.describe(fArg, 'File to read')
	.describe(oArg, 'File name for output of command')
	.demandOption([fArg])
	.help(hArg)
	.alias(hArg, 'help')
	.argv;

const fs = require('fs');

const contents = fs.readFileSync(argv.file)
const json = JSON.parse(contents)

const jsonString = JSON.stringify(json);

const escapedJson = `"${jsonString.replaceAll('"', '\\"')}"`;

if(argv.out) {
	fs.writeFileSync(argv.out, escapedJson)
} else {
	console.log(escapedJson);
}
