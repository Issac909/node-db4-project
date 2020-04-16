const express = require("express");

const RecipeRouter = require("../router/recipe-router");
const IngredientsRouter = require("../router/ingredients-router")

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientsRouter)

server.get('/', (req, res, next) => {
    res.json({ api: 'up'})
})

module.exports = server;