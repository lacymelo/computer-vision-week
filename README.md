<div align="justify">
  <p align="center">
    <img alt="banner" src="./assets/banner.png" width="770px" />
  </p>

  <h1 align="center">
    🤖 Projeto: API Clock-in-out
  </h1>

  > Bem-vindo ao repositório da API Clock-in-out, desenvolvida para registrar a entrada e saída de alunos em uma escola, demonstrando uma aplicação prática do dia a dia integrada à visão computacional.
</div>

## :rocket: Funcionalidades
- [x] Criar Usuário
- [x] Listar Usuários
- [ ] Registar Presença
---

##  📥 Configurações e instalações
> Estas são todas as bibliotecas utilizadas neste projeto, verifique cada uma com atenção.

✨ Vamos começar criando o arquivo `package.json` executando o comando.
```bash
npm init -y
```
✨ Todo o código será escrito em `TypeScript`. Além de instalá-lo, também utilizaremos o pacote `@types/node`, que integra o TypeScript com o Node.js. Para isso, execute o seguinte comando como uma dependência de desenvolvimento.
```bash
npm i typescript @types/node -D
```
✨ O projeto precisará de um arquivo `tsconfig.js`, que apresentará as principais configurações do typescript, para gerar esse arquivo execute o seguinte comando.
```bash
npx tsc --init
```
✨ Converter o código TypeScript para JavaScript para uso com o Node pode ser trabalhoso. Para evitar essa complexidade, vamos instalar a biblioteca `tsx`, que automatiza esse processo de conversão. Para instalar, execute o seguinte comando.
```bash
npm i tsx -D
```
🛠️ No `package.json`, vamos adicionar uma configuração responsável por executar o servidor, para isso adicione em `scripts` a seguinte estrutura.
```bash
  "scripts": {
    "dev": "tsx watch src/http/server.ts"
  },
```
✨ Para criar o servidor `http` no node vamos usar o `express`, instale usando o seguinte comando.
```bash
npm i express @types/express
```

✨ Para permitir requisições para a API, dos tipos `POST, GET, DELETE e PUT`, instale o `cors` usando o seguinte comando.
```bash
npm i cors @types/cors
```
✨ Neste projeto será necessário o envio de arquivos nas requisições, então vamos usar a lib `multer`, para instalar utilize o seguinte comando.
```bash
npm i multer
```

✨ Para interceptar erros será usada lib `express-async-errors`.
```bash
npm i express-async-errors
```

## :arrow_forward: Configurações do Prisma ORM
> Esses são os comandos e configurações do prisma.

✨ Para gerenciamento do banco de dados vamos utilizar o ORM `Prima`, para isso execute o comando.
```bash
npm i prisma -D
```

✨ Para integrar o prisma client, execute o seguinte comando
```bash
npm i @prisma/client
```

✨ Agora para inicializar o prisma execute o comando.
```bash
npx prisma init --datasource-provider sqlite  
```
✨ Para criar as tabelas no banco de dados, execute o seguinte.
```bash
npx prisma migrate dev
```
✨ O prisma possui uma interface integrada que permite navegar pelo banco de dados, para abrir essa interface execute o comando.
```bash
npx prisma studio
```
## :arrow_forward: Como Executar

> Esses são os comandos para executar o projeto

✨ clonar o repositório
```bash
git clone git@github.com:lacymelo/computer-vision-week.git
```

✨ entrar na pasta
```bash
cd clock-in-out-api
```

✨ instalar as dependências
```bash
npm i
```

✨ executar a api
```bash
npm run dev
```

# :closed_book: License

Released in 2025 :closed_book: License
Made with love by  Laciene Melo [#lacymelo](https://github.com/lacymelo) 🚀.
This project is under the [MIT license](./LICENSE).
Give a ⭐️ if this project helped you!


