const router = require('express').Router();
let Habit = require('../models/habit.model');

router.route('/').get((req, res) => {
  Habit.find()
    .then(habits => res.json(habits))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;

  const newHabit = new Habit({
    username,
    title,
    description
  });

  newHabit.save()
    .then(() => res.json('Habit added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Habit.findById(req.params.id)
    .then(habit => res.json(habit))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Habit.findByIdAndDelete(req.params.id)
    .then(() => res.json('Habit deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Habit.findById(req.params.id)
    .then((habit) => {
      habit.username = req.body.username;
      habit.title = req.body.title;
      habit.description = req.body.description;

      habit.save()
        .then(() => res.json('habit updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;