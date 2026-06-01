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


## API Documentation

Postman collection included: `Task_Manager_API.postman_collection.json`

### How to use Postman Collection

1. Import `Task_Manager_API.postman_collection.json` into Postman
2. Set environment variable `base_url` = `http://localhost:3000/api/v1`
3. Run "Login - Get Token" to authenticate
4. Token auto-saves and works for all protected routes

### API Endpoints Tested

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/v1/auth/register | Register new user |
| POST | /api/v1/auth/login | Login & get token |
| GET | /api/v1/auth/me | Get current user |
| POST | /api/v1/tasks | Create task |
| GET | /api/v1/tasks | Get all tasks |
| GET | /api/v1/tasks/:id | Get single task |
| PUT | /api/v1/tasks/:id | Update task |
| DELETE | /api/v1/tasks/:id | Delete task |