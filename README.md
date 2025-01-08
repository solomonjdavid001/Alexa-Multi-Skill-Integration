# Alexa-Multi-Skill-Integration

A TypeScript-based Alexa skill project that demonstrates the integration of multiple skills (Custom + Smart-Home Skills), currently featuring a Joke skill that fetches and tells jokes using the JokeAPI.

## Features

- Custom Alexa and Smart-Home Alexa skill implementation using the ASK SDK
- Joke skill that fetches random jokes from JokeAPI
- Built with TypeScript for type safety and better development experience
- Docker containerization for AWS Lambda deployment
- CI/CD pipeline using CircleCI for automated builds and deployments

## Prerequisites

- AWS Account
- Amazon Developer Account
- Docker

## Configuration

The project uses a configuration system for managing external services:

- JokeAPI URL configuration in `src/config/config.ts`
- Environment-specific configurations can be added using `.env` files

## License

This project is licensed under the ISC License.
```
