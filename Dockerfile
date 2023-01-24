FROM node:16.15-alpine3.15
WORKDIR /app
COPY . .
RUN yarn 
EXPOSE 3000
CMD ["yarn", "dev"]
