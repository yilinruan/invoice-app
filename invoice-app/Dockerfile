# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/invoice-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Expose the application's port
EXPOSE 3001  # Change this if your frontend uses a different port

# Command to run your application
CMD ["npm", "run", "dev"]
