const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//for the .env file, if it is already in the same folder as .env
//require('dotenv').config();
require('dotenv').config({
    path: './config/config.env'
})

const app = express();
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//mongo DB stuff
const uri = process.env.ATLAS_URI;//for .env file
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//load all routes
const HabitRouter = require('./routes/habits');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user')

//use all routes
app.use('/habits', HabitRouter);
app.use('/api', authRouter);
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});