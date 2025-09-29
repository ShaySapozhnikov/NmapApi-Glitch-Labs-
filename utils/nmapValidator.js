

const fs = require('fs');
const path = require('path');

const allowedCommandsPath = path.join(__dirname, '../data/Commands.json');
let allowedCommands = JSON.parse(fs.readFileSync(allowedCommandsPath, 'utf8'));




function validateCommandArray(commandArray) {

    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

    const ip = commandArray[commandArray.length -1]; // grab ip
    const ipCheck = ipRegex.test(ip) // test ip


    if (!ipCheck) //check 1 see if ip is even valid.
    {
        return false

    } 

    // check 2 see if commands are avalibale o(n)
    //- todo
    // checkl

    for (let i = 0 ; i < commandArray.length - 1; i++)
    {
        if (!allowedCommands[commandArray[i]])
        {
            return false
        }
    }
    
    
    return true
    
       
}
      
module.exports = validateCommandArray;