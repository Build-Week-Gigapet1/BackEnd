
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pet').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet').insert([
        {petname: 'Sparky', user_id: 1}
      ]);
    });
};
