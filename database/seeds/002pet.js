
exports.seed = function(knex) {
      return knex('pet').insert([
        {petname: 'Sparky', user_id: 1}
      ]);
};
