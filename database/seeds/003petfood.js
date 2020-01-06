
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('petfood').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('petfood').insert([
        {food_category: 'meat', food_name: 'chicken', food_amount: 1, pet_id: 1}
      ]);
    });
};
