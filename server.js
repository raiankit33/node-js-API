const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const port = process.env.PORT || 8080
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

const app = express();
app.use(bodyParser.json());

app.use(cors());
// Middleware
// app.use('/employees', () => {
//     console.log('Middleware Running');
// });

// Routes 
app.get('/', (req, res) => {
    res.send('Hello World');
});


// app.get('/employees', (req, res) => {
//     res.send('Employees');
// });

const connectDB = require('./Config/db');
// Load Config
dotenv.config({path: './Config/config.env'})

connectDB();

// Routes
app.use('/emp', require('./routes/employees'));

app.listen(port, () => {
    console.log(
      `Server listening on ${process.env.NODE_ENV} mode ont port ${port}!`
    );
  });



