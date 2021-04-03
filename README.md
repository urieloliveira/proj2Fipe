# Getting Started

Para a inicialização do projeto certifique-se que tenha instalado o [NodeJs](https://nodejs.org/en/download/) e o [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable), todos em suas versões latest.

## Script de desenvolvimento

No diretório do projeto, rode o comando `yarn` para instalar as dependências do projeto e em seguida excute:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3000]() para visualizá-lo no navegador.

A página será recarregada se você fizer edições.
Você também verá quaisquer erros no console.

## Estrutura de pastas

```bash
├── public
├── src
│   ├── components
│   │    └── **
│   │        ├── **/index.js
│   │        └── **/styles.js
│   ├── pages
│   │    └── **
│   │        ├── **/index.js
│   │        └── **/styles.js
│   ├── services
│   │    ├── api.js
│   │    └── auth.js
│   ├── App.js
│   ├── index.html
│   └── routes.js
├── .gitignore
├── package.json
├── README.md
└── uarn.lock
```

## Contribuições

Para fazer contribuições ao projeto é importante ter em mente algumas práticas

1. Criar a branch de desenvolvimento sempre a partir da branch **dev**
2. Para persistir as mudanças da feature criada deve-se sempre realizar um **pull request** na branch **dev** e solicitar aprovação

## Dependências de estilo

Para facilitar a estilização do projeto foram instaladas algumas dependências que é recomendado o uso:

[Material-ui](https://material-ui.com/getting-started/installation/)
[Styled-components](https://styled-components.com/docs)
