# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/invoice-api

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Run Prisma migrations
RUN npx prisma migrate deploy

# Build the application
RUN npm run build

# Seed the database
RUN npm run seed

# Expose the application's port
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
