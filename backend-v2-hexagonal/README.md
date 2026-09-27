# LPlan Backend V2 — Hexagonal Architecture

Second-generation backend for **LPlan**, redesigned from the original backend into a structure inspired by hexagonal architecture.

The main objective of this version was to separate domain concepts and application logic from infrastructure concerns such as HTTP controllers, MongoDB persistence and external services.

> For the complete project overview, architecture and team history, see the [root README](../README.md).

## Architecture

The backend is organized around three main areas:

```text
src/
├── domain/
├── application/
└── infraestructure/
```

### `domain/`

Contains domain entities, value objects and repository abstractions.

### `application/`

Contains application use cases and application-level logic.

### `infraestructure/`

Contains implementation details such as:

- HTTP controllers
- Routes
- MongoDB repositories
- Database integration
- External services
- Utility implementations
- Application bootstrap

## Functionality

The backend supports functionality around:

- Users and authentication
- Activities
- Publications
- Comments
- Locations
- Ratings / likes
- File and image handling
- Real-time communication
- Email-related services

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- Jest
- JSON Web Tokens
- bcryptjs
- Socket.IO
- Cloudinary
- Nodemailer
- Multer
- Pino
- ESLint
- Prettier
- Docker

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Provide the required configuration values, then start the development server:

```bash
npm run dev
```

Build the TypeScript project:

```bash
npm run build
```

Run the available Jest test command:

```bash
npm test
```

## Relationship with Backend V1

The original implementation is preserved in [`backend-v1`](../backend-v1/).

Keeping both versions makes it possible to compare the project's architectural evolution from a conventional controllers / services / models structure to a clearer separation between domain, application and infrastructure concerns.

## Status

Archived project component. The code reflects the original 2023 implementation and is retained for portfolio, learning and historical purposes.