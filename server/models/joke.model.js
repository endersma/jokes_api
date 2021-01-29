const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: String,
        punchline: String,
    },
    {
        timestamps: true,
    }
);

const modelName = "Joke";

const Joke = mongoose.model(modelName, JokeSchema);

module.exports = Joke;