FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]


