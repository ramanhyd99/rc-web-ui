# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application (Convert TS to JS and put into /dist folder)
RUN npm run build

# Install process manager PM2
RUN npm install -g pm2

# Expose the port on which the application listens
EXPOSE 3001

# Env variables 
ENV NODE_ENV=production
ENV BACKEND_URL=http://localhost:8046/api

# Start the application using pm2 in production mode by default
CMD [ "sh", "-c", "pm2-runtime npm -- start" ]

