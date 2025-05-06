# AI Tube - Clone do YouTube para Vídeos de IA e Automação

Uma aplicação web que exibe vídeos do YouTube relacionados a Inteligência Artificial e Automação.

## Visão Geral

Este projeto é um clone do YouTube com foco em vídeos de um nicho específico: Inteligência Artificial e Automação. A aplicação utiliza a API do YouTube para buscar e exibir vídeos relevantes nesse tema.

## Tecnologias Utilizadas

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- API YouTube Data v3

## Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM ou Yarn
- Uma chave de API do YouTube (necessária para fazer chamadas à API)

## Configuração da API

Para utilizar a API do YouTube, você precisará criar uma chave de API:

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto
3. Ative a API YouTube Data v3
4. Crie uma chave de API
5. Copie a chave e substitua o valor de `API_KEY` no arquivo `src/services/youtube-api.ts`

## Configuração Local

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/youtube-ai-clone.git
   cd youtube-ai-clone
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra o navegador e acesse `http://localhost:5173`

## Deploy

### GitHub

1. Crie um repositório no GitHub
2. Adicione o repositório remoto
   ```bash
   git remote add origin https://github.com/seu-usuario/youtube-ai-clone.git
   ```
3. Faça push do código
   ```bash
   git add .
   git commit -m "Versão inicial"
   git push -u origin main
   ```

### Render

1. Crie uma conta no [Render](https://render.com/)
2. Conecte sua conta do GitHub
3. Crie um novo Web Service
4. Selecione o repositório
5. Configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run preview`
6. Clique em "Create Web Service"

## Licença

MIT

---

Desenvolvido como parte de um projeto educacional para demonstrar a integração com a API do YouTube e o desenvolvimento de aplicações web modernas. 