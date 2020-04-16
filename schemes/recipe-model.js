const db = require("../data/dcConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipes
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes")
    .select("ingredients.ingredient_amount", "ingredients.ingredient_name")
    .join("recipe_ingredients", {
      "recipe_ingredients.recipe_id": "recipes.id"
    })
    .join("ingredients", {
      "ingredients.id": "recipe_ingredients.ingredient_id"
    })
    .where({ "recipes.id": id });
}

function getInstructions(id) {
  return db("recipes")
    .select("steps.step_number", "steps.description")
    .join("steps", { "recipes.id": "steps.recipe_id" })
    .where({ "recipes.id": id });
}