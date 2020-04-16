const express = require("express");

const Ingredients = require("../schemes/ingredients-model");
const router = express.Router();

router.get("/:id/recipes", (request, response) => {
    const { id } = request.params;
    Ingredients.getRecipiesForIngredient(id)
      .then(list => {
        if (list.length) {
          response.status(200).json(list);
        } else {
          response.status(404).json({ message: "No recipes with that ingredient was found" });
        }
      })
      .catch(error => {
        console.log("Error: ", error);
        response
          .status(500)
          .json({ message: "Failed to retrieve recipe list ", errorMessage: error.message });
      });
  });


module.exports = router;