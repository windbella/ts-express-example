FROM node:12.16.1-alpine

RUN mkdir -p /app
WORKDIR /app
ADD . /app

WORKDIR /app/client
RUN yarn install --production
RUN yarn build

WORKDIR /app/server
RUN yarn install --production
RUN yarn build

WORKDIR /app

EXPOSE 3000

CMD node ./server/bin/www.js