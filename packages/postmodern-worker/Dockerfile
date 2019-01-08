FROM node:alpine
RUN apk add --update nodejs
WORKDIR /usr/src/app
COPY . .
RUN rm -rf ./dist && rm -rf ./node_modules && npm install && ./node_modules/.bin/tsc
