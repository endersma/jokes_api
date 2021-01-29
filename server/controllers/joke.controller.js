const { response } = require('express');

const Joke = require('../models/joke.model');

module.exports = {
    helloWorld: (req, res) =>{
        return response.send("Hello, world!")
    },

    getAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                res.json(allJokes);
            })
            .catch((err) => console.log(res.json(err)));
    },

    getJokeById: (req, res) => {
        Joke.findById(req.params.id)
            .then((oneJoke) => {
               res.json(oneJoke); 
            })
            .catch((err) => res.json(err));
    },

    getRandomJoke: (req, res) => {
        Joke.findOne()
            .then((randomJoke) => {
                res.json(randomJoke);
            })
            .catch((err) => res.json(err));
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
        .then((newJoke) => {
            res.json(newJoke);
        })
        .catch((err) => res.json(err));
    },

    updateOneJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body,{new: true})
        .then((updatedJoke) => {
            res.json(updatedJoke);
        })
        .catch((err) => res.json(err));
    },

    deleteOneJoke: (req, res)=> {
        Joke.findByIdAndDelete(req.params.id)
            .then((deletedJoke) => {
                res.json(deletedJoke);
            })
            .catch((err) => res.json(err));
    },
}


 