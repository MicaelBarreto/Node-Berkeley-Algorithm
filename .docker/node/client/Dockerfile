FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY ./date-client/package*.json ./

RUN npm install

COPY ./date-client .

# EXPOSE 3001

CMD [ "node", "app.js" ]