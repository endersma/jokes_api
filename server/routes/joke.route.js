const jokesController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get("/", jokesController.helloWorld);
    app.get("/api/jokes", jokesController.getAllJokes);
    app.get("/api/jokes/random", jokesController.getRandomJoke);
    app.get("/api/jokes/:id", jokesController.getJokeById);
    app.post("/api/jokes", jokesController.createJoke);
    app.put("/api/jokes/:id", jokesController.updateOneJoke);
    app.delete("/api/jokes/:id", jokesController.deleteOneJoke);
}