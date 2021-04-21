## Base do Projeto TypeScript

```
yarn init -y
yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev -D
yarn add express
yarn add @types/express -D
```

## Base TypeORM

```
yarn add typeorm
yarn add reflect-metadata
yarn add sqlite3

- Criar e configurar arquivo orgconfig.json para db e CLI do TypeORM
- Criar uma pasta database com index para criar a conexão
- Criar pasta de migrations
- Criar pasta de entities
- Criar pasta de repositories
- Criar pasta de controllers
```

## Comandos CLI TypeORM Utilizados:

### Criar uma migration:

```
yarn typeorm migration:create -n {{name}}
```

### Executar uma migration para criação no db:

```
yarn typeorm migration:run
```

### Rollback na migration (desfazer a última execução):

```
yarn typeorm migration:revert
```
