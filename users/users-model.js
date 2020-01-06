const db = require('../database/dbConfig.js');

module.exports = {
  add,
  findPet,
  findBy,
  findById,
  addPet
};

function findPet(user) {
  return db('pet').select('pet.petname', 'petfood.food_category', 'petfood.food_name', 'petfood.food_amount')
  .join('petfood', 'petfood.pet_id', 'pet.id')
  .join('users', 'pet.user_id', 'users.id')
  .where('users.username', user);
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function addPet(pet) {
  const [id] = await db('pet').insert(pet)

  return getPetById(id);
}

function getPetById(id) {
  return db('pet')
  .where({ id })
  .first();
}