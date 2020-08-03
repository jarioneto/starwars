
# Star Wars

![CI](https://github.com/jarioneto/starwars/workflows/CI/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f1c268a8-67d4-4a2f-b546-2977f9bf64a9/deploy-status)](https://app.netlify.com/sites/iclinic-starwars/deploys)
![react](https://img.shields.io/github/package-json/dependency-version/jarioneto/starwars/react)
![typescript](https://img.shields.io/github/package-json/dependency-version/jarioneto/starwars/dev/typescript)

Aplicação desenvolvida em [ReactJS](https://pt-br.reactjs.org/) para consumo da API [Swapi](https://swapi.dev/)

### Configurar ambiente

Criar cópia do arquivo .env.example e configurar a variável REACT_APP_API_URL com o URL da API

```bash
cp .env.example .env
```

Obs: A API https://swapi.dev/api/ apresentou problemas de CORS, como susgestão recomenda-se o uso de um proxy. Ex: https://cors-anywhere.herokuapp.com/https://swapi.dev/api/

### Instalar dependências

```bash
yarn
```

### Executar em modo de desenvolvimento

```bash
yarn start
```

### Executar linter do código

```bash
yarn lint
```

### Criar build para ambiente produção

```bash
yarn build
```

### Executar testes

```bash
yarn test
```

### Verificar cobertura do código

```bash
yarn coverage
```

