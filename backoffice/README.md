# LPlan Backoffice

Administration client for **LPlan**, built with Angular and TypeScript.

The backoffice provides management interfaces for the platform's main entities and was developed as part of the same five-person 2023 engineering project.

> For the complete project overview, architecture and team history, see the [root README](../README.md).

## Main Functionality

The backoffice contains administration views and workflows for:

- Users
- Activities
- Applications
- Publications
- Comments
- Locations
- Authentication
- User relationships

The project includes list, detail, create and edit interfaces for several of these entities.

## Tech Stack

- Angular 15
- TypeScript
- Angular Router
- Angular Forms
- RxJS
- Bootstrap
- Font Awesome
- SweetAlert2
- Jasmine / Karma
- Docker

## Structure

The Angular application is organized under:

```text
src/app/
├── components/
├── interfaces/
├── models/
├── services/
└── shared/
```

The `components/` directory contains the administration views, while API access is implemented through Angular services.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

Build the application:

```bash
npm run build
```

Run tests:

```bash
npm test
``

## Backend Integration

The backoffice was originally connected to the first backend and later adapted to the hexagonal backend.

The backend implementations are available at:

- [`backend-v1`](../backend-v1/)
- [`backend-v2-hexagonal`](../backend-v2-hexagonal/)

## Status

Archived project component. The code reflects the original 2023 implementation and dependency versions.
