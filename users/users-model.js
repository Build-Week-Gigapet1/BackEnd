const db = require('../database/dbConfig.js');

module.exports = {
  add,
  getFood,
  findBy,
  findById,
  feeding
};

function getFood(id) {
  return db('petfood')
  .join('users', 'users.id', 'petfood.user_id')
  .where('users.id', id);
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

async function feeding(food, userID) {

  const feed = {...food, user_id: userID};

  const [id] = await db('petfood').insert(feed);

  return feedById(id);
}

function feedById(id) {
  return db('petfood')
    .where({ id })
    .first();
}