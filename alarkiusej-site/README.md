# Alarkius EJ Site

A modern static site built with Vite and React, ready to deploy on Netlify.

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
cd alarkiusej-site
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

The compiled files will be in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Deployment with Netlify

### Option 1: Connect via GitHub (Recommended)

1. Push this repository to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub and authorize
5. Choose the repository
6. Set build command: `npm run build`
7. Set publish directory: `dist`
8. Click "Deploy site"

### Option 2: Manual Deployment

1. Build the project locally: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## File Structure

```
alarkiusej-site/
├── src/
│   ├── App.jsx       # Main App component
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── netlify.toml      # Netlify configuration
├── vite.config.js    # Vite configuration
├── package.json      # Project dependencies
└── README.md         # This file
```

## License

MIT
