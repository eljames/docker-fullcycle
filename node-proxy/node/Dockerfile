FROM node:21-slim
EXPOSE 3000

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update
RUN apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*


COPY ./node-start.sh /node-start.sh

RUN chmod +x ./node-start.sh

WORKDIR /node/app
COPY ./src .
RUN npm install

## Foi deixado o CMD caso o usuário não queira rodar com docker compose
CMD ["/node-start.sh"]