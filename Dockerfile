FROM nameco131211/expo-teslo-shop:latest

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]