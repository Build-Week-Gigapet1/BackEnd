const bycrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries  
      return knex('users').insert([
        {username: 'user1', password: bycrypt.hashSync('123', 10), petname: "Sparky"}
      ]);    
};
