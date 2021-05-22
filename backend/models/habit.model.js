const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HabitSchema = new Schema({
    creator: { 
        type: String, 
        required: true },
    title: {
        type: String,
        required: true },
    description: { 
        type: String }
    // today: { 
    //     type: Boolean,
    //     required: true },
    // history: { 
    //     type: Array,
    //     required: true }
    // lifespan: { 
    //     type: Date },
}, 
{
  timestamps: true,
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;