const express = require('express');
const apiRouter = express.Router(); 


//data
// ****************************************
const reservationData = require('../data/reservationData')
const waitListData = require('../data/waitlistData')
// ****************************************


apiRouter.get('/tables', (req, res) => {
    // this gives us the reservationData 
 res.json(reservationData); 
})

apiRouter.get('/waitlist', (req, res) => {
    // this gives us the waitListData 
 res.json(waitListData); 
})


module.exports = apiRouter; 


