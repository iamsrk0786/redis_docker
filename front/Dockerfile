# Base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy application files
COPY . .

# Expose the application port
EXPOSE 5173

#RUN npm run build

# Start the serve
#CMD ["npm", "run","preview"]
CMD ["npm", "run", "dev"]


