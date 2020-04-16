const express = require("express");

const RecipeRouter = require("../router/recipe-router");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipeRouter);

server.get('/', (req, res, next) => {
    res.json({ api: 'up'})
})

module.exports = server;