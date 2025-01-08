# Stage 1: Builder
FROM amazon/aws-lambda-nodejs:20 AS builder

# Enable Corepack to manage package managers like pnpm
RUN corepack enable

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm with caching
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm fetch --frozen-lockfile && \
    pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Runner
FROM amazon/aws-lambda-nodejs:20 AS runner

# Enable Corepack
RUN corepack enable

# Copy the built application from the builder stage
COPY --from=builder /app/dist .
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./

# Install dependencies for production
RUN pnpm install --frozen-lockfile --prod

# Set the entrypoint to the built application
CMD ["dist/index.handler"]