FROM node:18-alpine
WORKDIR /express-backend
COPY . .
RUN yarn install --production
CMD ["tsc --build", "node", "./build/index.js"]