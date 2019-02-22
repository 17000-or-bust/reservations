FROM node:6.13.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm run pack

EXPOSE 3003

CMD ["sh","-c","npm run server && mysql -u root -h \"172.17.0.2\" -P 3306;"]