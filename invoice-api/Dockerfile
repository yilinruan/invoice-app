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

# Copy the wait script
COPY wait-for-db.sh .

# Make the wait script executable
RUN chmod +x wait-for-db.sh

# Wait for the database to be ready, then run Prisma migrations
CMD ["sh", "wait-for-db.sh"]
