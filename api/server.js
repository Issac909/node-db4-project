const express = require('express');

const recipesRouter = require('../router/recipe-router');
const ingredientsRouter = require('../router/ingredients-router');

const server = express();
server.use(express.json());

server.use('/api/recipes', recipesRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server; 