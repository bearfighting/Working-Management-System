FROM node:alpine
# Install dependencies via apk
RUN apk update && apk upgrade \
    && apk add --no-cache python3 g++ make \
    && rm -rf /var/cache/apk/*
# Install zero globally
RUN npm install --quiet --no-progress --unsafe-perm -g zero
# Add current folder to /app
ADD . /app
# Run zero in production mode
ENV NODE_ENV production
# Generate bundles
RUN zero build
# Expose port
ENV PORT 3000
EXPOSE 3000
WORKDIR /app
CMD ["zero"]
