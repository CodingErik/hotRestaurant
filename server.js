const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
// port to list on 
const PORT  = process.env.PORT || 8080; 

// require Routes
// ****************************************
const reserveRouter = require('./routes/reserveRoute'); 
const tablesRouter = require('./routes/tablesRoute'); 
const apiRouter = require('./routes/apiRoute'); 
// ****************************************


// MIDDLEWARE
// ****************************************
app.use(express.urlencoded({ extended: true })); // this is for fancy json 
app.use(express.json());

// to import website style
// app.use(express.static('Develop/public'));  // maybe assets  // what happens when we take this off let's try it

// setting up a small middleWare for testing
app.use(morgan('dev'));
// ****************************************

// hits the homepage
app.get('/', (req, res) => {
    res.send('home page'); 
})

// ROUTERS*********************************
app.use('/reserve', reserveRouter);
app.use('/tables', tablesRouter); 
app.use('/api', apiRouter); 
//*****************************************



app.listen(PORT, () => {
    console.log('server is running'); 
})