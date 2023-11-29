FROM node:21
EXPOSE 3000

COPY ./node-start.sh ./node-start.sh
RUN chmod +x ./node-start.sh

WORKDIR /node/app
COPY ./src .

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update
RUN apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install


ENTRYPOINT [ "/node-start.sh"]