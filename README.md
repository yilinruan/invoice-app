This project is a full-stack invoice management system with user authentication. 
The backend is built with Nest.js and PostgreSQL, while the frontend is developed using React and Redux. 
Users can log in and manage their invoices via a simple, intuitive interface.

Tech Stack
Backend: Nest.js, PostgreSQL, Prisma ORM
Frontend: React, Redux, TypeScript
Database: PostgreSQL
Authentication: JWT

# Sample login account
alice@example.com
password123

Installation:
1. Clone the repository:
git clone https://github.com/yilinruan/invoice-app.git

2. Install dependencies for both frontend and backend:
# Backend
1. cd invoice-api
2. npm install
3. npx prisma migrate dev --name init
4. npm run seed
5. npm start

# Frontend
1. cd ../invoice-app
2. npm install
3. npm run build
4. npm run dev

To run with Docker: 
1. cd to the root folder
2. docker-compose up --build

Issue: Sometime when running => " docker-compose up --build " in docker, you might see the error of backend service is trying to connect to the database before it's ready to accept connections. I don't have much experiences with docker and not sure how to prevent this. So please try to run it again when you see this issue.
