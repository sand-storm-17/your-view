FROM node:20-alpine

WORKDIR .

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npx nx build youtube-opinions-market

EXPOSE 3000

CMD ["npm","run","dev"]