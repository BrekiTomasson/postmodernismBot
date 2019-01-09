FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --update nodejs
RUN npm install

COPY . .

WORKDIR /usr/src/app/dist

COPY package*.json ./dist/

RUN ./node_modules/.bin/tsc
