FROM node:20-alpine

WORKDIR .

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN npx nx build youtube-opinions-market

EXPOSE 3000

CMD ["yarn","run","dev"]