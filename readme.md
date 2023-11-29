
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
git clone https://github.com/eljames/docker-fullcycle.git
cd docker-fullcycle

```

- Digite o comando a seguir para rodar as aplicações:
```
docker compose --project-directory ./node-proxy up --build
```

Deve estar acessível no endereço http://localhost:8080