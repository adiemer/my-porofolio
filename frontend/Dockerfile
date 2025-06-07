FROM node:18

WORKDIR /app

# Copy only package files first (to use Docker cache)
COPY frontend/package*.json ./

# Clean install without using existing lock file or modules
RUN rm -rf node_modules package-lock.json && npm install

# Now copy the rest of the app
COPY frontend/. .

#CMD ["serve", "-s", "dist", "-l", "3000"]