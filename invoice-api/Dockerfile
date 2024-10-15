# Dockerfile for the backend service
FROM node:18

# Set the working directory
WORKDIR /usr/src/invoice-api

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the backend app runs on
EXPOSE 3000

# Start the application using the wait-for-db script
CMD ["sh", "-c", "npx prisma migrate dev --name init && npm run seed && npm run start:dev"]

