FROM node:21
EXPOSE 3000

WORKDIR /node/app
COPY . .

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update
RUN apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install
RUN chmod +x node-start.sh

ENTRYPOINT [ "./node-start.sh"]