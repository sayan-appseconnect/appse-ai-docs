# Stage 1: Build the Docusaurus site
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy only package manager files
COPY pnpm-lock.yaml package.json ./

# Install dependencies (using frozen lockfile)
RUN pnpm install --frozen-lockfile

# Copy rest of the project
COPY . .

# Build arguments for Search configuration to be baked into static site
ARG TYPESENSE_HOST
ARG TYPESENSE_PORT
ARG TYPESENSE_PROTOCOL
ARG TYPESENSE_SEARCH_API_KEY

ENV TYPESENSE_HOST=$TYPESENSE_HOST
ENV TYPESENSE_PORT=$TYPESENSE_PORT
ENV TYPESENSE_PROTOCOL=$TYPESENSE_PROTOCOL
ENV TYPESENSE_SEARCH_API_KEY=$TYPESENSE_SEARCH_API_KEY

# Build the static site
RUN pnpm build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy the built site
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]