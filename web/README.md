# LPlan Web

Browser client for **LPlan**, built with React and TypeScript.

The web application provides the main desktop/browser experience for the platform and consumes the LPlan backend APIs.

> For the complete project overview, architecture and team history, see the [root README](../README.md).

## Main Functionality

The web client contains functionality around:

- User authentication and profiles
- Feed and publications
- Comments and likes
- Activity discovery
- Activity participation
- Calendar views
- Maps and locations
- Chat
- Profile and content sharing
- Statistics and charts
- Localization
- Loading and feedback states

## Tech Stack

- React
- TypeScript
- React Router
- Axios
- FullCalendar
- Leaflet / React Leaflet
- Chart.js
- Socket.IO Client
- i18next
- Google OAuth
- SweetAlert2
- React Icons
- ESLint
- Prettier

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

Fill in the required values and start the development server:

```bash
npm start
```

The application is served by the Create React App development server.

## Other Commands

Run tests:

```bash
npm test
```

Create a production build:

```bash
npm run build
```

## Backend

This client was developed alongside the LPlan backend and later adapted to the hexagonal backend version:

- [`backend-v1`](../backend-v1/)
- [`backend-v2-hexagonal`](../backend-v2-hexagonal/)

## Status

Archived project component. The code reflects the original 2023 implementation and dependency versions.