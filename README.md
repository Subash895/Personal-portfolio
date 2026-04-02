# Subash B R Portfolio

Personal portfolio website built with React and Vite. The site presents a short profile, featured projects, skills, and contact details in a single-page layout.

## Tech Stack

- React 18
- Vite 6
- CSS
- GitHub Pages for hosting

## Features

- Hero, about, projects, skills, contact, and footer sections
- Content-driven portfolio data from a single file
- Scroll-based reveal animations
- GitHub Pages deployment workflow included

## Project Structure

```text
.
|-- .github/workflows/deploy.yml
|-- public/
|-- src/
|   |-- components/
|   |-- data/data.js
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Update Portfolio Content

Edit the portfolio data in:

```text
src/data/data.js
```

This file contains:

- Personal information
- About section content
- Project list
- Skills
- Experience

## Deploy to GitHub Pages

This project already includes a GitHub Pages workflow at:

```text
.github/workflows/deploy.yml
```

To publish the site:

1. Create a new GitHub repository.
2. Push this project to the `main` branch.
3. Open the repository on GitHub.
4. Go to `Settings -> Pages`.
5. Make sure the site is set to deploy with `GitHub Actions`.
6. Push any new commit to `main` and GitHub will build and publish the site automatically.

Your site URL will usually be:

```text
https://<github-username>.github.io/<repository-name>/
```

## Author

- Name: Subash B R
- GitHub: https://github.com/Subash895
- LinkedIn: https://linkedin.com/in/subash-b-r
- Email: subashbr895@gmail.com
