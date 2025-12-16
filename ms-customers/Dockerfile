# --- Base stage (dependency install) ---
FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS test
RUN npm test

# --- Production stage ---
FROM node:18-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .
EXPOSE 3002

# Start the application
CMD ["npm", "start"]