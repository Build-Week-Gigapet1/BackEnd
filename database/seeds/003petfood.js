
exports.seed = function(knex) {
      return knex('petfood').insert([
        {food_category: 'meat', food_name: 'chicken', food_amount: 1, pet_id: 1}
      ]);
};
