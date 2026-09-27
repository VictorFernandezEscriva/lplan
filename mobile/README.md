# LPlan Mobile

Mobile client for **LPlan**, built with React Native, Expo and TypeScript.

The application provides the mobile experience for the platform and includes mobile-specific functionality such as QR scanning, native maps and device-oriented integrations.

> For the complete project overview, architecture and team history, see the [root README](../README.md).

## Main Functionality

The mobile client contains functionality around:

- User authentication and profiles
- Feed and publications
- Activities
- Calendar views
- Maps and geolocation
- Chat
- QR generation and scanning
- Profile sharing
- Statistics and charts
- Localization
- Image selection
- Voice / speech-related functionality
- Video / real-time communication experiments

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Axios
- React Native Maps
- Expo Location
- Expo Barcode Scanner
- QR Code SVG
- Socket.IO Client
- WebRTC-related libraries
- Agora
- i18next
- Cloudinary
- React Native Gifted Chat
- React Native Chart Kit

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

Fill in the required values.

Start Expo:

```bash
npm start
```

Run the Android development build:

```bash
npm run android
```

Other scripts available in the project include:

```bash
npm run ios
npm run web
```

## External Configuration

Some integrations require local configuration that is intentionally not committed to the repository.

In particular, Google / Firebase functionality may require:

```text
android/app/google-services.json
```

This file is excluded from version control and must be supplied locally when required.

Real credentials must never be committed to the repository.

## Android Project

The repository contains the Android native project generated/used by the React Native / Expo application under:

```text
android/
```

Generated build outputs and local Android configuration are excluded through `.gitignore`.

## Status

Archived project component. The code reflects the original 2023 implementation and dependency versions.