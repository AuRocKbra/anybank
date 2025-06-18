# Anybank

Este projeto foi criado usando o [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Servidor de desenvolvimento

Para iniciar o ambiente de desenvolvimento use o comando:

```bash
ng serve
```

Iniciado o servidor em desenvolvimento, acesse do navegador de sua preferência a url `http://localhost:4200/`. Quando qualquer arquivo do projeto for alterado o resultado será automaticamente atualizado no servidor.

## Comandos para ajuda

O angular cli permite que com poucas instruções de comando seja possível criar novos componentes, por exemplo: 

```bash
ng generate component component-name
```
Use o comando acima para criar um novo componente, ou ainda, de formar mais simples

```bash
ng g c component-name
```

Para saber a lista completa de comandos possíveis execute o comando abaixo:

```bash
ng generate --help
```

## Building

Para realizar o building do projeto execute o comando abaixo:

```bash
ng build
```
O projeto será compilado e armazenado na pasta `dist\`. Por padrão, as builds de produção são optimizadas para que sua aplicação tenha performance e velocidade.

## Executando teste unitários

Os teste unitários são realizados com o [Karma](https://karma-runner.github.io). Para executar use o comando abaixo:

```bash
ng test
```

## Executando testes end-to-end tests

Para executar testes end-to-end (e2e), execute o comando abaixo:

```bash
ng e2e
```

O projeto não está com os teste end-to-end implementados, logo faz-se necessário implementá-los, podendo ser usado qualquer framework desejado.

