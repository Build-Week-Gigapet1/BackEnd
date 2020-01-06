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

      food.string("food_category", 128).notNullable();

      food.string("food_name", 128).notNullable();

      food.integer("food_amount");

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
  return knex.schema.dropTableIfExists("pet").dropTableIfExists("petfood");
};
