# # Use an official Node.js runtime as the base image
# FROM node:18 as build

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install app dependencies
# RUN npm install react-google-login --force

# RUN npm install

# # Copy the rest of the app code to the working directory
# COPY . .

# # Build the React app
# RUN npm run build

# Use an official Nginx image as the base image for the final image
FROM nginx:latest

RUN apt-get update && apt-get install -y vim


# Copy the built React app files to the Nginx public directory
# COPY --from=build /app/build /usr/share/nginx/html

COPY ../build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/

EXPOSE 8080

ENV env="dev"

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
