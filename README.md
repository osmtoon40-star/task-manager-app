# Task Management API

A production-ready REST API for task management with JWT authentication, role-based access control (RBAC), and a React frontend.

## Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- React.js + Vite
- Tailwind CSS
- Axios
- React Router DOM

## Features

- ✅ User registration & login with JWT
- ✅ Role-based access (Admin vs User)
- ✅ Full CRUD operations for tasks
- ✅ Protected routes
- ✅ Admin sees all users' tasks
- ✅ Users see only their own tasks
- ✅ Input validation
- ✅ Error handling

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Regular User | john@test.com | 12345678 |
| Admin | admin@test.com | admin123 |

## Installation

### Backend
```bash
cd backend
npm install
npm run dev


API Endpoints
POST /api/v1/auth/register - Register user

POST /api/v1/auth/login - Login user

GET /api/v1/auth/me - Get current user

POST /api/v1/tasks - Create task

GET /api/v1/tasks - Get all tasks

PUT /api/v1/tasks/:id - Update task

DELETE /api/v1/tasks/:id - Delete task