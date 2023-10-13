FROM node:18 as builder

# Set working directory
WORKDIR /usr/src/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./
COPY ./yarn.lock ./
COPY ./.yarnrc.yml ./
COPY ./.yarn ./.yarn
COPY ./.npmrc ./

# Install dependencies
RUN yarn install --immutable

# Copy all files
COPY ./ ./

# Set env
ENV NODE_ENV production

ENV NITRO_PRESET node_cluster

# Build app
RUN yarn build

# final image use distroless for smaller build
FROM gcr.io/distroless/nodejs18-debian11:nonroot

# Set env
ENV NODE_ENV production

# Set working directory
WORKDIR /usr/src/app

# Copy .output from builder
COPY --from=builder /usr/src/app/.output/ /usr/src/app/.output/

# Expose the listening port
EXPOSE 3000

# Launch app
CMD [ ".output/server/index.mjs" ]
