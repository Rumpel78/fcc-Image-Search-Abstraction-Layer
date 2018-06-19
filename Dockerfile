FROM node:boron
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./src/package.json /usr/src/app/
RUN yarn
COPY ./src/ /usr/src/app/
EXPOSE 8080
CMD [ "yarn", "start" ]
