FROM node:slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

EXPOSE 3001

COPY . .

CMD ["yarn", "start"]

