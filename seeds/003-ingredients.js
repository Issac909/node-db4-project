
exports.seed = function(knex) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { ingredient_name: "Pack of Ramen", ingredient_amount: 1 },
        { ingredient_name: "Bowl", ingredient_amount: 1 },
        { ingredient_name: "Teapot", ingredient_amount: 1.5 }
      ]);
    });
};
