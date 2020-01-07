exports.up = function(knex) {
  return knex.schema
    .createTable("petfood", tbl => {
      tbl.increments();

      tbl.string("date_fed", 128).notNullable();

      tbl.string("food_category", 128).notNullable();

      tbl.string("food_name", 128).notNullable();

      tbl.integer("food_amount").notNullable();

      tbl
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
