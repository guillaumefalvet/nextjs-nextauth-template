<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">NEXTJS-NEXTAUTH-TEMPLATE</h1>
</p>
<p align="center">
    <em>This repository provides a template for integrating Next.js with NextAuth.js for authentication. Below is a guide to get started with the project.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/guillaumefalvet/nextjs-nextauth-template?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/guillaumefalvet/nextjs-nextauth-template?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/guillaumefalvet/nextjs-nextauth-template?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/guillaumefalvet/nextjs-nextauth-template?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/sharp-99CC00.svg?style=flat&logo=sharp&logoColor=white" alt="sharp">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>
## Features

- **Next.js**: Framework for React applications.
- **NextAuth.js**: Authentication for Next.js applications.
- **Prisma**: ORM for database interactions.
- **TypeScript**: Typed JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Docker**: Containerization for development and deployment.

## Getting Started

### Prerequisites

- Node.js
- npm, yarn, pnpm, or bun
- Docker (optional for containerized setup)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/guillaumefalvet/nextjs-nextauth-template.git
   cd nextjs-nextauth-template
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Configuration

1. Copy the example environment file and update the variables:
   ```bash
   cp .env.example .env
   ```

2. Update `prisma/schema.prisma` with your database configuration.

### Running the Application

1. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Docker

1. Build the Docker image:
   ```bash
   docker-compose build
   ```

2. Start the containers:
   ```bash
   docker-compose up
   ```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

Feel free to submit issues and pull requests to improve the template.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For any questions, reach out via GitHub issues.
