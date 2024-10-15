FROM node:18

WORKDIR /usr/src/invoice-api

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-db.sh .

RUN chmod +x wait-for-db.sh

CMD ["sh", "wait-for-db.sh"]
