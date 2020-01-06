exports.up = function(knex) {
  return knex.schema
    .createTable("pet", pet => {
      pet.increments();

      pet
        .string("petname", 128)
        .notNullable()
        .unique();

      pet
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("petfood", food => {
      food.increments();

      food.integer("dairy", 128);
      food.integer("grains", 128);
      food.integer("vegetables", 128);
      food.integer("fruit", 128);
      food.integer("meat", 128);
      food.integer("sweets", 128);

      food
        .integer("pet_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("pet")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("pet");
};
