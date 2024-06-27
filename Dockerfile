# Use the official Nginx image as the base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the static files into the container
COPY index.html .
COPY fireworks.js js/
COPY styles.css css/

# Copy a custom Nginx configuration file to set up port 3001
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3001 (for your static content)
EXPOSE 3001

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]