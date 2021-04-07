// Libraries 
const express = require('express')
const session = require('express-session')
const exphbs  = require('express-handlebars');
const path = require('path')

// Set Config Dotenv
const dotenv = require('dotenv')
dotenv.config({ path: 'Config/config.env' })



// Initialize App
const app = express();

// Setting View Engine To Express Handlebars 
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Set Static Folder 
app.use(express.static(path.join(__dirname, 'Public')))


// Routes 
// Slash Routes
app.use('/',require('./Routes/slash'))

const port = process.env.PORT;

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port} on ${process.env.NODE_ENV} environment`)
})