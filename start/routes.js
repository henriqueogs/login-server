'use strict'

const Route = use('Route')

Route.get("/", () => {
    return { hello: "Bem vindo ao servidor da tela de Login - Por Henrique de Oliveira Guimarães Santos" };
  });
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
