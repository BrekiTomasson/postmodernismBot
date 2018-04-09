FROM node:carbon

# Create the Application Directory

WORKDIR /usr/src/app

# Hey, let's install the app dependencies before we go on, okay?
# We'll use the wildcard to catch both the package.json and the
# package-lock.json files here.

COPY package*.json ./
RUN npm install

# Then, let's copy our app over there.

COPY . .

# ... And expose that post we're using.

EXPOSE 3000

# Last but not least, let's start that thing up!

CMD [ "npm", "start" ]
