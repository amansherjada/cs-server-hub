# Use the official Node.js 18 image as the base
FROM node:22.11.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js will run on (default: 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
