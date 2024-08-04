<div align="center">
  <img height="70px" src="https://github.com/user-attachments/assets/6d460dda-4c32-4c81-9c58-c868840d901c" alt="FireSign favicon">
  <h1>FireSign – Secure Authentication Made Easy</h1>
  <a href="https://firesign.ranitmanik.live">View Demo</a>
  ·
  <a href=".github/ISSUE_TEMPLATE/bug_report.md">Report Bug</a>
  ·
  <a href=".github/ISSUE_TEMPLATE/feature_request.md">Request Feature</a>
  <br/>
  <br/>
  
  ![GitHub Created At](https://img.shields.io/github/created-at/RanitManik/FireSign)
  ![GitHub repo size](https://img.shields.io/github/repo-size/RanitManik/FireSign)
  ![GitHub Discussions](https://img.shields.io/github/discussions/RanitManik/FireSign)
  ![GitHub License](https://img.shields.io/github/license/RanitManik/FireSign)
  ![GitHub stars](https://img.shields.io/github/stars/RanitManik/FireSign?style=default)
  ![GitHub forks](https://img.shields.io/github/forks/RanitManik/FireSign?style=default)
  <br/>
  ![Netlify Status](https://api.netlify.com/api/v1/badges/d0ce3dc4-4e21-43c4-9054-b4ec5b705890/deploy-status)
  ![wakatime](https://wakatime.com/badge/github/RanitManik/FireSign.svg)
  
</div>  

Welcome to **FireSign – *Secure Authentication Made Easy***, a React-based authenticator app that simplifies the sign-up and sign-in processes, including various OAuth provider integrations. This app demonstrates the integration of Firebase and React for a seamless authentication experience.

## Table of Contents


- [Overview](#overview)
    - [Why This Application?](#why-this-application)
    - [Technologies Used](#technologies-used)
    - [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
    - [Building for Production](#building-for-production)
    - [Linting and Formatting](#linting-and-formatting)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Overview

### Why This Application?

FireSign is designed to offer a straightforward and secure authentication system with both traditional sign-in methods and various OAuth providers. It leverages React and Firebase to provide a modern, reliable user authentication experience.

### Technologies Used

<p>
   <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" height="30px" />
   <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Firebase" height="30px" />
   <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" height="30px" />
   <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" height="30px" />
   <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" height="30px" />
   <img src="https://img.shields.io/badge/PostCSS-%23DD3A0A.svg?style=for-the-badge&logo=postcss&logoColor=white" alt="PostCSS" height="30px" />
   <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" height="30px" />
   <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black" alt="Prettier" height="30px" />
   <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" height="30px" />
</p>

### Features

- **React**: A powerful JavaScript library for building user interfaces.
- **Firebase**: A comprehensive app development platform for authentication and database management.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A modern build tool for fast development and optimized production builds.
- **JavaScript**: The programming language used for interactive web applications.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **ESLint**: Ensures code quality by identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter that maintains consistent code style.

## Getting Started

### Prerequisites

- **Node.js** (>= 20.0.0)
- **npm** (>= 10.0.0) or **yarn** (>= 1.22.0)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RanitManik/FireSign.git
   cd FireSign
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:5173` to see the application in action.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

The built files will be located in the `dist` directory.

### Linting and Formatting

To lint your code, run:

```bash
npm run lint
```

or

```bash
yarn lint
```

To format your code, run:

```bash
npm run format
```

or

```bash
yarn format
```

## Project Structure

The project structure is as follows:

```
FireSign/
├── public/ # Static assets (e.g., favicon, manifest)
├── src/ # Main source code
│   ├── assets/ # Images and other static assets
│   ├── components/ # Reusable React components
│   ├── routes/ # Application routes and route components
│   ├── context/ # Application contexts for state management
│   ├── App.jsx # Main application component
│   ├── main.jsx # Entry point for the React application
│   └── index.scss # Global styles for the application
├── .env.example # Template for environment variables
├── .gitignore # Specifies files and directories to ignore in Git
├── .prettierrc # Configuration file for Prettier code formatting
├── .eslintrc.cjs # Configuration file for ESLint
├── index.html # HTML template for the application
├── vite.config.js # Vite configuration file
├── package.json # Project dependencies, scripts, and metadata
└── README.md # Documentation for the project
```

## Contributing

We welcome contributions to enhance the FireSign application. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them with clear and descriptive messages.
4. Push your changes to your fork:

   ```bash
   git push origin feature-name
   ```

5. Create a pull request to the main repository, detailing the changes and enhancements you have made.

## Contact

<table>
  <tr>
    <th></th>
    <th>Social Media</th>
    <th>Username</th>
    <th>Link</th>
  </tr>
  <tr>
    <td><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="20" /></td>
    <td>Email</td>
    <td><code>ranitmanik.dev@gmail.com</code></td>
    <td><a href="mailto:ranitmanik.dev@gmail.com" target="_blank">Email</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" width="20" /></td>
    <td>LinkedIn</td>
    <td><code>Ranit Manik</code></td>
    <td><a href="https://www.linkedin.com/in/ranit-manik/" target="_blank">LinkedIn</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="20" /></td>
    <td>Instagram</td>
    <td><code>ranit_manik_</code></td>
    <td><a href="https://www.instagram.com/ranit_manik_/" target="_blank">Instagram</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width="20" /></td>
    <td>Facebook</td>
    <td><code>RanitKumarManik</code></td>
    <td><a href="https://www.facebook.com/RanitKumarManik/" target="_blank">Facebook</a></td>
</tr>
</table>

_Feel free to reach out if you have questions or just want to chat about web adventures!_

## Acknowledgments

This project showcases the developer community's collaboration and resources. Thanks to the community and tools like React and Firebase. Special appreciation to friends and family. I hope it inspires further learning.

---

<p align="center">
   Thank you for using <strong>FireSign</strong>! Happy coding! 🚀
</p>
