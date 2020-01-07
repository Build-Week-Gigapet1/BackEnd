exports.up = function(knex) {
  return knex.schema
    .createTable("petfood", food => {
      food.increments();

      food.string("date_fed", 128).notNullable();

      food.string("food_category", 128).notNullable();

      food.string("food_name", 128).notNullable();

      food.integer("food_amount").notNullable();

      food
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("petfood");
};
