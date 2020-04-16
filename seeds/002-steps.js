
exports.seed = function(knex) {
  return knex("steps")
    .truncate()
    .then(function() {
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          description: "Open the package the ramen is enclosed in."
        },
        {
          recipe_id: 1,
          step_number: 2,
          description: "Add 2 cups water to pot."
        },
        {
          recipe_id: 1,
          step_number: 3,
          description: "You can choose to add ramen pack before or after water is boiling but nontheless, place pot on stove over medium flames."
        },
        { recipe_id: 1, 
          step_number: 4, 
          description: "Monitor consistency of ramen with fork. When satisfied, empty contents of pot into glass bowl." }
      ]);
    });
};
