const express = require('express'); 
const tablesRouter = express.Router();

//data
// ****************************************
const reservationData = require('../data/reservationData')
const waitListData = require('../data/waitlistData')
// ****************************************


tablesRouter.get('/', (req, res) => {
    res.send('/tables'); 
}); 


module.exports = tablesRouter; 