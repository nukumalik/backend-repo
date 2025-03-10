# **Backend Project 🚀**

This project is a **backend application** built with **Node.js, Express.js, and TypeScript**, using **esbuild** as the build tool. It includes **ESLint, Prettier, Husky, and Commitlint** to enforce code quality and commit standards.

## **📦 Technologies Used**

- **Express.js** - Minimalist backend framework for Node.js
- **TypeScript** - A typed superset of JavaScript
- **esbuild** - A fast JavaScript/TypeScript bundler
- **Husky & Commitlint** - Enforces commit message conventions
- **ESLint & Prettier** - Linter and formatter for clean and consistent code
- **TSX** - TypeScript execution runtime without pre-compilation

## **⚡ Installation**

Make sure you have **Node.js**. Note: this project uses `pnpm`, but free to use your preference node package manager.

#### 1. Clone the repository:

```sh
git clone https://github.com/nukumalik/backend-repo.git
cd backend
```

#### 2. Install dependencies:

```sh
pnpm install
# OR
npm install
```

#### 3. Create a .env file

```sh
cp .env.example .env
```

## **🚀 Running The Project**

#### 1. Development Mode (Auto Relode)

```sh
pnpm run dev
# OR
npm run dev
```

#### 2. Build the Project

```sh
pnpm run build
# OR
npm run build
```

#### 3. Run the Built Project

```sh
pnpm run start
```

## **🚀 Code Standard & Commit Guidelines**

#### 1. Linting & Formatting

Run ESLint and Prettier to enforce code style:

```sh
pnpm run lint
pnpm run format
# OR
npm run lint
npm run format
```

#### 2. Commit Message Standard (Husky & Commitlint)

Use Conventional Commits format when committing changes:

```sh
git commit -m "feat: add user authentication"
```

## **📜 License**

This project is licensed under the ISC License.
