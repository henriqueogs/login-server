'use strict'

const Route = use('Route')

Route.get("/", () => {
    return { greeting: "Welcome to the Adonis API tutorial" };
  });
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
