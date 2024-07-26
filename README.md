# Wilodev Expo App

## Getting started

Welcome to the Wilodev Expo App, a React Native project using TypeScript and Expo. This guide will help you set up and run the project in your development environment.

### Prerequisites

Ensure you have the following tools installed:

- [Nodejs - v22.4.1](https://nodejs.org/en)
- [nvm](https://github.com/nvm-sh/nvm) for managing Node versions
- [bun](https://bun.sh/) for installing node packages
- [Expo CLI](https://docs.expo.dev/) for running and building Expo projects
- [Pre-commit](https://pre-commit.com/) for configuring pre-commit hooks

### Setting up linting pre-commit hooks

1.  Set up the pre-commit hooks for this repo:

        pre-commit install

### Setting environment variables

1.  Create your `.env.*.local` file from the template:

        cp .env.* .env.*.local

    Example:

        cp .env.development .env.development.local

### Installing Expo Prerequisites

1.  Install Expo CLI globally:

        npm install -g expo-cli

### Installing dependencies

1.  Install all node dependencies:

        bun install

## Running the app

Use the following scripts to run the application:

        bun ios:dev: Start the iOS app in development mode.
        bun ios:prod: Start the iOS app in production mode.
        bun aos:dev: Start the Android app in development mode.
        bun aos:prod: Start the Android app in production mode.

### Scripts Explained

- app:clean: Clean node modules and lock files.
- aos:dev: Start the Android app in development mode.
- aos:staging: Start the Android app in staging mode.
- aos:production: Start the Android app in production mode.
- ios:dev: Start the iOS app in development mode.
- ios:stating: Start the iOS app in stating mode.
- ios:production: Start the iOS app in production mode.
- web:dev: Start the web app in development mode.
- web:staging: Start the web app in staging mode.
- web:production: Start the web app in production mode.
- lint: Run ESLint for code analysis.
- test: Run Jest for testing.
- start: Start expo with cache reset.

### Additional Commands

- test:coverage: Generate test coverage report.
- prettier: Check code formatting with Prettier.
- postinstall: Apply patches after installing package

1.  Start the React Native Metro server:

        bun start

2.  To run the app on the default iOS simulator:

        bun ios:dev

3.  To run the app on the Android emulator (or any other Android device connected to the Android Debug Bridge):

        bun aos:dev

## Testing

### Running Jest unit test locally

    bun jest

## Creating and installing Android release packages locally

1.  Build the release package:

        expo build:android

## Version Requirements

- Node: >=22.0.0
- React Native: >=0.74.3
- TypeScript: >=5.3.3
- Expo: >=51

## Troubleshooting

For common issues, refer to the [Troubleshooting guide](https://reactnative.dev/docs/troubleshooting).

## Contributing

We welcome contributions! Please read our Contributing Guide for guidelines on how to contribute.

## License

This project, "Wilodev Expo App", is not licensed under the standard MIT License. Instead, it has a custom License which establishes specific terms of use, including restrictions on unauthorized use and commercialization, intellectual property protection, and liability clauses.

For more detailed information, please review the [LICENSE.md](LICENSE.md) file for the Spanish version or the [LICENSE_en.md](LICENSE_en.md) file for the English version.

Use of the "Wilodev App" software is subject to the acceptance of its license terms. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without express written permission from the owner.

For inquiries and authorization requests, contact: Wilson Fabian Pérez Sucuzhañay at [wilsonperez.developer@gmail.com](wilsonperez.developer@gmail.com).
