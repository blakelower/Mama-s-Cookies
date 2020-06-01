
exports.up = knex => (
    knex.schema
      .createTable('posts', table => {
        table.increments();
        table.integer('user_id')
          .references('id')
          .inTable('users')
          .notNullable();
        table.string('recipe_title', 256)
          .notNullable();
        table.string('ingredients', 128);
        table.string('measurments', 128);
        table.string('time_bake')
          .notNullable();
        table.string('instructions', 128);
        table.string('imageURL');
        table.timestamps(true, true);
      })
  );
  
  exports.down = knex => (
    knex.schema
      .dropTableIfExists('posts')
  );