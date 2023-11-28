FROM mysql:8.2.0
EXPOSE 3306
# Copiando para a pasta /docker-entrypoint-initdb.d
# Quando a imagem do mysql é executada, por padrão, será rodado todos os scripts .sql na pasta /docker-entrypoint-initdb.d
# O arquivo ./init-tables.sql cria a base de dados nodedb e cria a tabela people para o nodedb
COPY ./init-tables.sql /docker-entrypoint-initdb.d