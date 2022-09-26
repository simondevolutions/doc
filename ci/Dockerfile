# syntax=docker/dockerfile:experimental

# STEP 1 build static website
FROM node:lts-alpine as builder

WORKDIR /build

## Install Dependencies
COPY package.json package-lock.json /build/
RUN cd /build
RUN npm ci --no-audit

# Build
COPY . /build
RUN cd /build
RUN npm run build

## STEP 2 build a small nginx image with static website
FROM devolutions/nginx-brotli

## Copy our default nginx config
COPY ci/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy static website from 'builder' to default nginx public folder
COPY --from=builder /build/dist /usr/share/nginx/html

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
