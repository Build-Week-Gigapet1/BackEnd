const db = require("../database/dbConfig.js");

module.exports = {
  add,
  getFood,
  findBy,
  findById,
  feeding,
  update,
  remove
};

function getFood(id) {
  return db("petfood")
    .join("users", "users.id", "petfood.user_id")
    .where("users.id", id);
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  await db("users").insert(user);
  const newUsers = await getAllUsers();
  return newUsers[newUsers.length - 1];
}

function getAllUsers() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function feeding(food, userID) {
  const feed = { ...food, user_id: userID };

  await db("petfood").insert(feed);

  const newFeeding = await getFood(userID);

  return newFeeding;
}

function feedById(id) {
  return db("petfood")
    .where({ id })
    .first();
}

async function update(changes, userID, feedingID) {
  await db("petfood")
    .where({ user_id: userID, id: feedingID })
    .update(changes, "*");

  return getFood(userID);
}

async function remove(userID, feedingID) {
  await db("petfood")
    .where({ user_id: userID, id: feedingID })
    .del();

  const newFeeding = await getFood(userID);

  return newFeeding;
}
