FROM node:alpine
RUN mkdir -p /usr/src/app

COPY src /usr/src/app

WORKDIR /usr/src/app

RUN apk add --update nodejs && npm install && npm install pm2 -g

CMD [ "pm2-runtime", "npm", "--", "start" ]
