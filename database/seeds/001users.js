
exports.seed = function(knex) {
  // Deletes ALL existing entries  
      return knex('users').insert([
        {username: 'user1', password: '123'}
      ]);    
};