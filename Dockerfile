FROM node:6.13.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install -g nodemon
RUN npm install

EXPOSE 3003

CMD ["sh","-c","npm run server && npm run pack"]