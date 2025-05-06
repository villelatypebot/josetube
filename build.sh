#!/bin/bash

# Instalar dependências
npm install

# Build do projeto
npm run build

# Copiar o conteúdo estático para a pasta dist
cp -r public/* dist/

# Garantir que o _redirects esteja lá
echo "/* /index.html 200" > dist/_redirects 