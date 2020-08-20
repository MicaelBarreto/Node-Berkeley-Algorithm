FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY ./date-server/package*.json ./

RUN npm install

COPY ./date-server .

EXPOSE 3000

CMD [ "node", "app.js" ]