# Imagem base do Node.js
FROM node

# Imagem base do MongoDB
FROM mongodb/mongodb-community-server

# Diretório de trabalho
WORKDIR /app

# Copiar o código do projeto para o contêiner
COPY / ./

COPY mongod.conf /etc/mongod.conf

COPY package*.json ./

# Expor a porta do servidor Node.js
EXPOSE 4500

# Comando de inicialização do servidor
CMD mongod --config /etc/mongod.conf 




