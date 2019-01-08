# `postmodernismBotWorker`

> Note 1: This repo is from the monorepo found at [`brekitomasson\postmodernismbot`](https://www.github.com/brekitomasson/postmodernismBot).

> Note 2: While it does work independently, this package works best when running as a docker image as defined in `brekitomasson\postmodernismbot`.

## What it is:

Background worker that parses sentences and makes them available for the bot's brain to use.

## How it Works:

Using a collection of my own code and that of the [WinkJS Project](https://winkjs.org/), it runs through the following steps after running `npm run start`:

- Runs the `init()` script from `worker.ts`, which reads a series of text files from the `corpus` directory.
- These files are broken down into their constituent sentences, each one of which is parsed.
- During parsing, the vocabulary and sentence structure is analyzed and word patterns are learned.
- These word patterns are then stored in a Neo4j database for later use.
