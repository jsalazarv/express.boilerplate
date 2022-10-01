FROM node:lts-alpine
WORKDIR /var/www/html
COPY ./package.json .

RUN npm install
COPY . .

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start:dev"]
