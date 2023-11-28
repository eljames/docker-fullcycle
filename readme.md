
# Desafios Docker

## Rodando o programa Go

**- Faça o pull da imagem:
docker pull elijames/fullcycle-rocks**

- Rode a imagem:
```
docker run --name fullcycle-rocks elijames/fullcycle-rocks
```
- Deverá aparecer a mensagem Fullcycle Rocks!!


## Rodando proxy reverso com nodejs


- Faça o clone do projeto:

```
git clone 
```

- Digite o comando
```
docker compose -f ./node-proxy/docker-compose.yaml up
```

Deve ser acessível no endereço http://localhost:8080