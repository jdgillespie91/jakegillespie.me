FROM node:boron

COPY . /workspace
WORKDIR /workspace

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]