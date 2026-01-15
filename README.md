# UserDirectory

A React application that displays a searchable directory of users fetched from an API.

## Screenshot

![UserDirectory Screenshot](./src/assets/screenshot.png)

## Features

- Fetches user data from DummyJSON API
- Search functionality to filter users by name, email, or phone
- Responsive card-based UI layout
- Optimized filtering with `useMemo` hook

## Tech Stack

- React 19
- TypeScript
- Vite (Rolldown)
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── assets/          # Static assets (images, SVGs)
├── Components/      # React components
│   ├── UserDataFetching.tsx   # Data fetching logic
│   ├── UsersDataUI.tsx        # User cards UI
│   └── useMemoPractice.tsx    # useMemo examples
├── App.tsx          # Main App component
├── main.tsx         # Entry point
└── index.css        # Global styles
```