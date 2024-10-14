This project is a full-stack invoice management system with user authentication. 
The backend is built with Nest.js and PostgreSQL, while the frontend is developed using React and Redux. 
Users can log in and manage their invoices via a simple, intuitive interface.

Tech Stack
Backend: Nest.js, PostgreSQL, Prisma ORM
Frontend: React, Redux, TypeScript
Database: PostgreSQL
Authentication: JWT

Installation:
1. Clone the repository:
git clone https://github.com/yilinruan/invoice-app.git

2. Install dependencies for both frontend and backend:
# Backend
cd invoice-api
npm install
npx prisma migrate deploy 
npm run build 
npm run seed
npm start

# Frontend
cd ../invoice-app
npm install
npm run build 
npm run dev