import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('locations_items', table =>{
        table.increments('id').primary();
        table.string('locations_id')
            .notNullable()
            .references('id')
            .inTable('location');
        table.string('items_id')
            .notNullable()
            .references('id')
            .inTable('items');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('locations_items');
}   