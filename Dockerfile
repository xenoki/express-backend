FROM node:18-alpine
WORKDIR /express-backend
COPY . .
RUN yarn install --production
CMD ["node", "./build/index.js"]