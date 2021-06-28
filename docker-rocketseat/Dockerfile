# Qual versão de qual máquina iremos usar:
FROM node:alpine  

# Diretório dentro da minha máquina que eu quero trabalhar:
WORKDIR /usr/app

# Copiamos todos os arquivos que começam com package e terminam com json para dentro da minha máquina.
COPY package*.json ./

# Agora ele dá o npm install nos arquivos.
RUN npm install

#Agora copiamos os arquivos que faltam.
COPY . .

#A porta que meu servidor precisa expor para minha máquina acessar.
EXPOSE 3000

#Qual comando precisa rodar para meu servidor startar.
CMD ["npm", "start"]