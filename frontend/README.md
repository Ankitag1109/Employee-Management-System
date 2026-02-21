EMPLOYEE MANAGEMENT SYSTEM
MERN Stack Application

The Employee Management System is a full-stack web application developed using MongoDB, Express.js, React.js, and Node.js. The system enables secure authentication and efficient employee data management with search, filter, and image upload functionality.
This project demonstrates structured API design, JWT-based authentication, backend validation, and professional UI implementation following clean architecture principles.

Technology Stack
Frontend
• React.js
• Axios
• Context API / Hooks
• CSS
• Inter Font

Backend
• Node.js
• Express.js
• MongoDB
• Mongoose
• JWT Authentication
• bcryptjs
• Multer
• dotenv

Core Functionalities
Authentication Module
• Secure login with username and password
• Password hashing using bcrypt
• JWT token generation
• Protected routes via authentication middleware
• Token expiration handling
• Secure logout mechanism

Dashboard Interface
• Structured header and sub-header layout
• Main content area
• Employee creation modal
• Responsive UI implementation

Employee Management
• Create employee with image upload
• Store data in MongoDB
• Display employee records in structured table
• Server-side validation

Validation Rules
• Valid email format
• Phone number must be exactly 10 digits
• Required field enforcement
• Dropdown-based department and designation
• Backend schema validation

Search & Filter System
Search (Case-insensitive):
• Name
• Email
• Department

Filter:
• Department
• Designation
• Gender

Combined Query Example:
GET /api/employees?search=John&department=HR&designation=Manager
Backend Architecture
• RESTful API design
• Modular folder structure
• Middleware-based authentication
• Centralized error handling
• Environment variable configuration

Environment Configuration
Backend (.env)
PORT=8082
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=1h

Frontend (.env)
VITE_API_BASE_URL=http://localhost:8082/api

Setup Instructions
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

Application Access
Frontend: http://localhost:5173
Backend: http://localhost:8082

Security Measures
• Password encryption
• JWT-based authorization
• Protected API endpoints
• Environment-based configuration
• Backend input validation

Project Structure
Backend organized into:
config, controllers, middleware, models, routes, uploads, utils
Frontend organized into:
api, assets, context, hooks, pages,styles, routes, utils

Author
Ankita Gaikwad
MERN Stack Developer
