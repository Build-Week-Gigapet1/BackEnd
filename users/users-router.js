const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/pet', restricted, (req, res) => {
  Users.findPet(req.body.username)
    .then(pet => {
      res.status(200).json(pet);
    })
    .catch(err => res.send(err));
});

router.post('/pet', restricted, (req, res) => {
  if(req.body.petname || req.body.petname !== ""){
    Users.addPet(req.body)
    .then(pet => {
      res.status(201).json(pet);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new pet", err })
    })
  } else {
    res.status(400).json({ message: "petname missing" })
  }
})

module.exports = router;
