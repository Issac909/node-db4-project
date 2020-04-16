const db = require("../data/dcConfig");

module.exports = {
    getRecipiesForIngredient
};

function getRecipiesForIngredient(id) {
    return db("ingredients")
    .join("recipe_ingredients", {
        "recipe_ingredients.ingredient_id": "ingredients.id"
      })
    .join("recipes", {
        "recipes.id": "recipe_ingredients.recipe_id"
      })
    .where({ "ingredients.id": id })  
    .select("ingredients.ingredient_name", "recipes.id as recipeID", "recipes.name as recipe_name")
  }