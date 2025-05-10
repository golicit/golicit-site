# GoLicit Services

A modern web application for GoLicit Services, built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- ⚡ Fast development with Vite
- 💻 Built using React 18 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🌐 Routing with React Router
- 🧩 Modular component structure

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development
To start the development server:
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
To build the app for production:
```sh
npm run build
```
The output will be in the `dist` directory.

### Preview Production Build
To preview the production build locally:
```sh
npm run preview
```

## Deployment (Vercel)
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Use the following settings (auto-detected by Vercel):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy** and wait for your site to go live!

## Project Structure
```
├── public/              # Static assets (including logo_front.png)
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Project metadata and scripts
├── vite.config.ts       # Vite configuration
└── ...
```

## License
This project is licensed under the MIT License. 