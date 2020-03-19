const express = require("express");
const router = express.Router();

const {
  getRecipes,
  getShoppingList,
  getInstructions
} = require("../schemes/recipe-model");

router.route("/").get(async (req, res) => {
  /* GET /api/recipe */
  const recipes = await getRecipes();
  res.json(recipes);
});

router.route("/:id/shoppingList").get(async ({ params: { id } }, res) => {
  /* GET /api/recipe /id*/
  const ingredients = await getShoppingList(id);

  res.json(ingredients);
});

router.route("/:id/instructions").get(async ({ params: { id } }, res) => {
  const instructions = await getInstructions(id);

  res.json(instructions)
});

module.exports.router = router;