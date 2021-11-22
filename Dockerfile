FROM node:16
WORKDIR /app
COPY . .
RUN npm install --production
ENV NODE_ENV production
CMD ["npm", "run", "start"]
