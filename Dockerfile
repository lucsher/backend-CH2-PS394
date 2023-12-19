FROM node: 20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY . ./
CMD ["node", "server.js"]