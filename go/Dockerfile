# OBS: Eu sei que existe a imagem do Go pronta.
# Mas eu preferi usar a imagem do Debian e instalar o Go manualmente, para fins de aprendizado

FROM debian:bookworm-slim as compilation

# Obtendo o wget para a obtenção do go developer tool.
RUN apt-get update && apt-get install wget -y

# Realizando o download do Go developer tool compactado
RUN wget https://go.dev/dl/go1.21.4.linux-amd64.tar.gz

# Criando diretório para extrair o Go
RUN mkdir /golang

# Extraindo o Go
RUN tar -xf go1.21.4.linux-amd64.tar.gz -C /golang

# Removendo o arquivo compactado
RUN rm go1.21.4.linux-amd64.tar.gz

# Criando diretório para posteriormente armazemar o binário
RUN mkdir -p /fullcycle/bin

# Diretório corrente em /src
WORKDIR /src

# Copiando os fontes para o diretório corrente
COPY src .

# Compilando fonte para binário
RUN /golang/go/bin/go build -o /fullcycle/bin

FROM scratch
WORKDIR /fullcycle/bin
COPY --from=compilation /fullcycle/bin .
CMD [ "./fullcycle" ]