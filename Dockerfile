# Use official Node.js Alpine for smaller image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Expose ports
EXPOSE 5000
EXPOSE 3000

# Start backend and frontend together
CMD ["npx", "concurrently", "npm:start", "node backend/server.js"]
