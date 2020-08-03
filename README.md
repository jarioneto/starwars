
# Star Wars

![CI](https://github.com/jarioneto/starwars/workflows/CI/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f1c268a8-67d4-4a2f-b546-2977f9bf64a9/deploy-status)](https://app.netlify.com/sites/iclinic-starwars/deploys)
![react](https://img.shields.io/github/package-json/dependency-version/jarioneto/starwars/react)
![typescript](https://img.shields.io/github/package-json/dependency-version/jarioneto/starwars/typescript)

Aplicação desenvolvida para consumo da API [Swapi](https://swapi.dev/)

Stack utilizada no desenvolvimento:
* TypeScript
* React
* Styled Components
* Jest
* React Testing Library
* ESlint
* Prettier
* Continuos Integration
  * Github Actions (**build, lint, coverage**)

# Configuração inicial

Execute os passos abaixo para realizar a configuração inicial da aplicação.


### Variáveis de ambiente

Crie uma cópia do arquivo .env.example e e renomeie para .env

```bash
cp .env.example .env
```

Edite o arquivo criado no passo anterior e informe a URL da API
```bash
REACT_APP_API_URL=https://swapi.dev/api/
```

**Observação**: Durante o desenvolvimento da aplicação a API [Swapi](https://swapi.dev/api/) apresentou problemas de **CORS**, como sugestão recomenda-se o uso de um proxy, como mostra o exemplo abaixo.

```bash
REACT_APP_API_URL=https://cors-anywhere.herokuapp.com/https://swapi.dev/api/
```

### Instalar dependências

Para instalar as dependências da aplicação execute o comando abaixo:

```bash
yarn
```

# Scripts disponíveis

### Execução em modo de desenvolvimento

```bash
yarn start
```

### Executar linter do código

```bash
yarn lint
```

### Criar build de produção

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

