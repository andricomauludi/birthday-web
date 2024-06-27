# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the HTML files into the Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 3001

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]