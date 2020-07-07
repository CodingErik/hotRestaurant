const express = require('express'); 
const app = express(); 

const PORT  = process.env.PORT || PORT; 


// MIDDLEWARE
// ****************************************
app.use(express.urlencoded({ extended: true })); // this is for fancy json 
app.use(express.json());

// to import website style
// app.use(express.static('Develop/public'));  // maybe assets  // what happens when we take this off let's try it

// setting up a small middleWare for testing
app.use(morgan('dev'));
// ****************************************





app.listen(PORT, () => {
    console.log('server is running'); 
})