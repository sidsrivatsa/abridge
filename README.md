# abridge

<img alt='overnightjs' src='https://github.com/seanpmaxwell/express-generator-typescript/raw/master/express-typescript.png' border='0'>

[Express](https://www.npmjs.com/package/express) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

## What is express-generator-typescript?

Creates a new express application similar to the _express-generator_ module. Except this new
application is configured to use TypeScript instead of plain JavaScript.

## What is abridge?

Abridge is intended to be a simple URL shortening service. Random short URLs are generated for each long URL
provided and navigating to these short URLs will cause a browser redirect.

## Why express-generator-typescript?

NodeJS is great for the rapid development of web-projects, but is often neglected because of the lack of
type safety. TypeScript solves this issue and (along with its linter file) can even make your code
more robust than some other static languages like Java.

There are some other tools out there to generate express apps with TypeScript such as
_express-generator-ts_, but these either haven't been updated in a while or install a lot of junk
in your project (such as an ORM).

Due to the heavy use of single-page-applications, no view-engine is configured by default. Express is
only setup with the minimal settings for calling APIs and serving an index.html file. All the tools you
need to run for development (while restarting on changes), building, testing, and running for production
are packaged with this library.

In addition, relative paths are also setup, so you don't have to go through the trouble of installing
and configuring _tsconfig-paths_ and _module-alias_. Just make sure to update `paths` in _tsconfig.json_
and `_moduleAliases` in _package.json_ if you want to add/edit the relative paths.

## Installation

```sh
$ npm install
```

## Quick Start

Start your express-generator-typescript app in development mode at `http://localhost:3000/`:

```bash
$ cd "abridge" && npm run start-dev
```

## Available commands for the server.

- Run the server in development mode: `npm run start-dev`.
- Run all unit-tests: `npm test`.
- Run a single unit-test: `npm test -- "name of test file (i.e. Users)"`.
- Check for linting errors: `npm run lint`.
- Build the project for production: `npm run build`.
- Run the production build: `npm start`.
