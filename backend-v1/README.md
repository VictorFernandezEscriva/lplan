# LPlan Backend V1

Original backend implementation for **LPlan**, developed during the first stage of the 2023 team project.

This version uses a conventional Node.js / Express structure based on controllers, services, models and routes. It is preserved in the monorepo to show the project's original design before the later migration to a hexagonal architecture.

> For the complete project overview, architecture and team history, see the [root README](../README.md).

## Responsibilities

This backend provides API functionality around:

- User registration and authentication
- User profiles
- Activities
- Publications
- Comments
- Locations
- Applications
- Feed generation
- Discovery
- Follow / unfollow relationships

## Structure

```text
src/
├── config/
├── controllers/
├── interfaces/
├── models/
├── routes/
├── services/
├── utils/
└── app.ts
```

The application follows a traditional layered approach where HTTP controllers coordinate with services and persistence models.

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- JSON Web Tokens
- bcryptjs
- Multer
- dotenv
- Docker

## Local Setup

Install dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Fill in the required values in `.env`, then start the development server:

```bash
npm run dev
```

## Evolution

This implementation was later redesigned into [`backend-v2-hexagonal`](../backend-v2-hexagonal/), where the codebase was reorganized around:

```text
domain/
application/
infraestructure/
```

Both versions are intentionally preserved to make the architectural evolution visible.

## Status

Archived project component. The code reflects the original 2023 implementation and is retained for portfolio, learning and historical purposes.