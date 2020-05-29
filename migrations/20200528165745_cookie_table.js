
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cookies', function (tbl){
        tbl.increments('id').primary();
        tbl.string('name', 250);
        tbl.string('ingredients', 250);
        tbl.string('measurements', 250);
        tbl.string('prep_time', 250);
        tbl.string('total_time', 250);
        tbl.string('servings', 250);
        tbl.string('img_url', 255);

    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cookies')
};
