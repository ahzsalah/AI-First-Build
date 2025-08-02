# Stunning API

A NestJS API with MongoDB integration using Mongoose.

## Features

- **NestJS Framework** - Modern Node.js framework
- **MongoDB Integration** - Using Mongoose ODM
- **Environment Configuration** - ConfigModule for environment variables
- **TypeScript** - Full TypeScript support
- **REST API** - Ready for custom endpoints

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27018/stunning-api

# Application Configuration
PORT=3001
NODE_ENV=development

# JWT Configuration (for future use)
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## MongoDB Setup

Make sure MongoDB is running on your system. You can use:

- **Local MongoDB**: Install and run MongoDB locally
- **MongoDB Atlas**: Use cloud MongoDB service
- **Docker**: Run MongoDB in a container

### Docker MongoDB (Recommended)

```bash
docker run -d -p 27018:27017 --name mongodb mongo:latest
```

## Project Structure

```
src/
├── app.module.ts          # Main application module
├── main.ts               # Application entry point
├── app.controller.ts     # Main controller
├── app.service.ts        # Main service
└── config/
    └── database.config.ts # Database configuration
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
