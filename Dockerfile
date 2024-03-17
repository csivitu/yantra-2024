FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

RUN npm run seed-events

EXPOSE 3000

CMD ["npm", "run", "start"]