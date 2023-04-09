FROM node:18-alpine
WORKDIR /express-backend
COPY . .
RUN yarn tsc
RUN yarn install --production
CMD [ "node", "./build/index.js"]