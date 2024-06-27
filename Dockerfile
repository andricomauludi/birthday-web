# Use the official Nginx image as the base image
FROM nginx:alpine

COPY . /usr/share/nginx/html/

# Copy a custom Nginx configuration file to set up port 3001
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3001 (for your static content)
EXPOSE 3001

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]