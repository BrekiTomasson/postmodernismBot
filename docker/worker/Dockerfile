FROM node:alpine
RUN mkdir -p /usr/src/app

COPY src /usr/src/app

WORKDIR /usr/src/app

RUN apk add --update nodejs && npm install && npm install --global typescript pm2

CMD [ "pm2-runtime", "npm", "--", "start" ]
