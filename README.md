# College Cart – MERN E-Commerce Platform

A full-stack MERN e-commerce platform featuring user authentication, admin dashboard, product & category management, order processing, database seeding, real-time chat using Socket.IO, and a complete React frontend.

## 🚀 Features
- 🔐 JWT Authentication (Login, Register, Protected Routes)
- 👑 Role-Based Access Control (Admin & User)
- 🛒 Products, Categories, Reviews
- 📦 Orders (Create, Pay, Deliver)
- 💬 Real-Time Chat (Admin ↔ User via Socket.IO)
- 📁 Image Uploads (express-fileupload)
- 🌱 Database Seeder (Sample products, categories, orders)
- ⚙️ Backend + Frontend Monorepo
- 📊 Admin Analytics Endpoint
- 🧩 Modular Controllers, Routes, Models

## 🛠 Tech Stack
### Backend
- Node.js, Express.js
- MongoDB, Mongoose
- JSON Web Tokens
- Socket.IO
- express-fileupload
- helmet, cookie-parser

### Frontend
- React (CRA)
- Context / Hooks

## 📁 Project Structure
/backend  
  /config  
  /controllers  
  /middleware  
  /models  
  /routes  
  /seeder  
  server.js  
/frontend  
package.json  
Procfile  

## ⚙️ Environment Variables
Create a .env inside backend/:
PORT=5000  
NODE_ENV=development  
MONGO_URI=<your-mongodb-uri>  
JWT_SECRET_KEY=<your-secret-key>  

## 🧩 Installation
git clone <repo-url>  
cd ecommerce-main  

cd backend  
npm install  

cd ../frontend  
npm install  

## ▶️ Running the Project
Development: npm run dev  
Backend only: npm run server-prod  
Frontend only: npm run client  

## 🌱 Database Seeding
npm run seed:data  
npm run seed:data-d  

## 🧪 API Endpoints (Summary)
Users: register, login, profile, admin ops, reviews  
Products: CRUD, upload, filters  
Categories: CRUD  
Orders: create, pay, deliver, analytics  

## 🔐 Authentication & Authorization
JWT + middleware verifyAuthToken & verifyIsAdmin

## 💬 Socket.IO Chat
Real-time messaging between admin and users

## 🚀 Deployment
Heroku-ready (Procfile + heroku-postbuild)

## 🔒 Security Recommendations
Enable full helmet, add rate limiting, validate uploads, HTTPS, cloud storage for images

## 📌 To-Do
Redis for chat, CI/CD, input validation, pagination metadata

## 🤝 Contributing
Fork → Branch → Commit → PR

## 📄 License
Add MIT or preferred license.

## 📚 Appendix – File Reference
Backend: controllers, models, middleware, seeder  
Frontend: React SPA  
