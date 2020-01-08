
exports.seed = function(knex) {
      return knex('petfood').insert([
        {date_fed: Date.now(), food_category: 'meat', food_name: 'chicken', food_amount: 1, user_id: 1}
      ], 'id');
};
