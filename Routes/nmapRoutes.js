const express = require('express');
const router = express.Router();



/// pathing 
const fs = require('fs');
const path = require('path');


//---------------------------------------------------------\\

//-utils

const validateCommandArray = require('../utils/nmapValidator')




//---------------------------------------------------------\\

/// needs to change [lazy loading]

const responsesPath = path.join(__dirname, '../data/Responses.json');
let responses = JSON.parse(fs.readFileSync(responsesPath, 'utf8'));


//===================================================================\\

// GET /nmap - returns help information
router.get('/', (req, res) => {
  res.json(responses['nmap-help']);
  console.log(responses['nmap-help'].message.length);
});

// POST /nmap/sendCommand - executes nmap command
router.post('/sendCommand', (req, res) => {
  
  const { command } = req.body;
  console.log("Received command:", command);



  const commandArray = command.split(" ");
  const Check =  validateCommandArray(commandArray);

  if(Check){
    res.json({ success: true, message: `You sent: ${command}` }); 

    //==============================================================\\
    //send to vm







    //===============================================================\\
  }

  else{res.status(500)}

});


//recive from vm







//===============================================================\\




module.exports = router;