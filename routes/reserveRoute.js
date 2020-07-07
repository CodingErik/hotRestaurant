const express = require('express'); 
const reserveRouter = express.Router(); 


//data
// ****************************************
const reservationData = require('../data/reservationData')
const waitListData = require('../data/waitlistData')
// ****************************************


reserveRouter.get('/', (req, res) => {
    res.send('/reserve'); 
}); 


module.exports = reserveRouter; 