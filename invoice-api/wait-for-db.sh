#!/bin/sh

# Wait for the PostgreSQL database to be ready
while ! nc -z db 5432; do
  sleep 1
done

# Run Prisma migrations
npx prisma migrate deploy

# Seed the database
npm run seed

# Start the application
npm start
