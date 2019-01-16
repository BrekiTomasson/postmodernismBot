FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --update nodejs
RUN npm install

COPY . .

WORKDIR /usr/src/app/dist

CMD ["node", "--optimize_for_size", "index"]

