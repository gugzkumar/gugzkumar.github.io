FROM node:13.3.0-alpine
ENV HOME=/usr/src/app
WORKDIR $HOME
RUN npm install -g gatsby-cli@2.8.27 --quiet
COPY ./package.json $HOME/package.json
RUN npm install --quiet
COPY ./ $HOME
