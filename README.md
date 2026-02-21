# EMPLOYEE MANAGEMENT SYSTEM

### MERN Stack Application

The **Employee Management System** is a full-stack web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

This system provides secure authentication and efficient employee data management with advanced search, filtering, and image upload functionality.

The project demonstrates:

- Structured REST API design
- JWT-based authentication
- Backend validation
- Clean architecture principles
- Professional and responsive UI

---

## 🚀 Technology Stack

### Frontend

- React.js
- Axios
- Context API & Hooks
- CSS
- Inter Font

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Multer
- dotenv

---

## 🔐 Core Functionalities

### Authentication Module

- Secure login with username and password
- Password hashing using bcrypt
- JWT token generation
- Protected routes using authentication middleware
- Token expiration handling
- Secure logout mechanism

---

### Dashboard Interface

- Structured header and sub-header layout
- Main content display area
- Employee creation modal
- Fully responsive UI design

---

### Employee Management

- Create employee with image upload
- Store employee data in MongoDB
- Display records in structured table format
- Server-side validation
- Real-time UI updates

---

## ✅ Validation Rules

- Valid email format
- Phone number must be exactly 10 digits
- Required field enforcement
- Dropdown-based department selection
- Dropdown-based designation selection
- Backend schema validation using Mongoose

---

## 🔎 Search & Filter System

### Search (Case-insensitive)

- Name
- Email
- Department

### Filters

- Department
- Designation
- Gender

### Example Query

GET /api/employees?search=John&department=HR&designation=Manager

---

## 🏗 Backend Architecture

- RESTful API design
- Modular folder structure
- Middleware-based authentication
- Centralized error handling
- Environment-based configuration

---

## ⚙️ Environment Configuration

### Backend (.env)

PORT=8082
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=1h

### Frontend (.env)

VITE_API_BASE_URL=http://localhost:8082/api

---

## 🛠 Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm run dev

🌐 Application Access

Frontend:
http://localhost:5173

Backend:
http://localhost:8082

---

## 🔒 Security Measures

- Password encryption using bcrypt
- JWT-based authorization
- Protected API endpoints
- Environment-based configuration
- Backend input validation
- Token expiration management

---

## 📁 Project Structure

### Backend
backend/
├── config
├── controllers
├── middleware
├── models
├── routes
├── uploads
├── utils


### Frontend
frontend/
├── api
├── assets
├── context
├── hooks
├── pages
├── styles
├── routes
├── utils

---

## 👩‍💻 Author

**Ankita Gaikwad**
MERN Stack Developer

---
```
