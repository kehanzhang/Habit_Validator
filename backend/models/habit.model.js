const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HabitSchema = new Schema({
    username: { 
        type: String, 
        required: true },
    title: {
        type: String,
        required: true },
    description: { 
        type: String },
    // lifespan: { 
    //     type: Date },
}, 
{
  timestamps: true,
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;