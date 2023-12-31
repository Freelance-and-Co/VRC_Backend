# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose a port (if your app listens on a specific port)
EXPOSE 4200

# Define the command to run your application
CMD ["npm", "start"]