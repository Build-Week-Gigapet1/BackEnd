const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:id/pet', restricted, (req, res) => {
  Users.getFood(req.params.id)
    .then(pet => {
      res.status(200).json(pet);
    })
    .catch(err => res.send(err));
});

router.post('/:id/pet', restricted, (req, res) => {
  if(req.body.date_fed || req.body.date_fed !== ""
    || req.body.food_category || req.body.food_category !== ""
    || req.body.food_name || req.body.food_name !== ""
    || req.body.food_amount || req.body.food_amount !== ""){
    Users.feeding(req.body, req.params.id)
    .then(feed => {
      res.status(201).json(feed);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new pet feeding", err })
    })
  } else {
    res.status(400).json({ message: "pet feeding object missing data." })
  }
})

router.put('/:id/pet/:feedingID', restricted, (req, res) => {
  if(req.body.date_fed || req.body.date_fed !== ""
    || req.body.food_category || req.body.food_category !== ""
    || req.body.food_name || req.body.food_name !== ""
    || req.body.food_amount || req.body.food_amount !== ""){
    Users.update(req.body, req.params.id, req.params.feedingID)
    .then(feed => {
      res.status(201).json(feed);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update pet feeding", err })
    })
  } else {
    res.status(400).json({ message: "pet feeding object missing data." })
  }
})

router.delete('/:id/pet/:feedingID', restricted, (req, res) => {
  Users.remove(req.params.id, req.params.feedingID)
  .then(feed => {
    res.status(200).json(feed);
  })
  .catch(err => {
    res.status(500).json({ message: 'Error removing the feeding.' })
  })
})

module.exports = router;
