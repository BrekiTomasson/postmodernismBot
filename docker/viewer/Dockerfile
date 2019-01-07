FROM node:8

RUN mkdir -p /usr/src/app/build


WORKDIR /usr/src/app
COPY package.json .
COPY tsconfig.json .

RUN apk add --update nodejs && npm install && npm install --global typescript pm2

WORKDIR /usr/src/app/src

RUN tsc

# WORKDIR /usr/src/app/build

EXPOSE 3000

CMD ['npm', 'start']
