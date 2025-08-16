# URL Shortener

A full-stack URL shortener application built with React and Node.js.

## Features

- Shorten long URLs
- Custom slug support for authenticated users
- User authentication (login/register)
- View all created URLs with click analytics
- Copy shortened URLs to clipboard

## Tech Stack

**Frontend:**

- React
- Redux Toolkit
- TanStack Router
- TanStack Query
- Tailwind CSS

**Backend:**

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
cd YOUR-REPOSITORY-NAME
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

4. Set up environment variables
   Create `.env` files in both backend and frontend directories with required variables.

5. Start the development servers

```bash
# Backend (from backend directory)
npm run dev

# Frontend (from frontend directory)
npm run dev
```

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/create` - Create short URL
- `GET /api/user/urls` - Get user's URLs
- `GET /:shortUrl` - Redirect to original URL

## Contributing

Pull requests are welcome. For major changes, please open an issue first.
