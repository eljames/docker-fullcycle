FROM mysql:8.2.0

# user mac 501

# RUN usermod -u 501 mysql

EXPOSE 3306
# Copiando para a pasta /docker-entrypoint-initdb.d
# Quando a imagem do mysql é executada, por padrão, será rodado todos os scripts .sql na pasta /docker-entrypoint-initdb.d
# O arquivo ./init-tables.sql cria a tabela people para a database nodedb
COPY ./init-tables.sql /docker-entrypoint-initdb.d