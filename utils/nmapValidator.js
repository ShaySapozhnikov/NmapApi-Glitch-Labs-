const fs = require('fs');
const path = require('path');

const allowedCommandsPath = path.join(__dirname, '../data/Commands.json');
let allowedCommands = JSON.parse(fs.readFileSync(allowedCommandsPath, 'utf8'));




function validateCommandArray(commandArray) {

    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/; // ip format check
    const isNumeric = /^\d+$/; // check port is an digit


    const seen = new Set(); // avoid dupliate commands

    const ip = commandArray[commandArray.length -1]; // grab ip
    const ipCheck = ipRegex.test(ip) // test ip


    if (!ipCheck) //check 1 see if ip is even valid.
    {
        return false

    } 
    

    // check 2 see if commands are avalibale o(n)
   
    for (let i = 0 ; i < commandArray.length - 1; i++)
    {
        if(!allowedCommands[commandArray[i]]) return false;
        console.log(commandArray[i]) 
        
        
        const checkDuplicate = commandArray[i] 

        // check for duplicates 
        if(seen.has(checkDuplicate)){
            return false
        }
        seen.add(checkDuplicate);
        


        switch (allowedCommands[commandArray[i]].type)
        {
            case "command":
                console.log("comand")
                continue
            case "flag":
                console.log("flag")
                continue
            
            case "p-number":
                if (i + 1 >= commandArray.length) continue; // -p is at the end should still be valid 
                
                
                const value = commandArray[i + 1];

                if (allowedCommands[value]) continue; // allows any other command that exist to be after -p
                
                else
                {
                    if (isNumeric.test(value))    
                        {
                                //console.log("This is an integer: " + value)
                                //convert to int
                                let validatedInteger = parseInt(commandArray[i + 1])
                            
                                console.log(validatedInteger)
                            
                            
                                if (allowedCommands[commandArray[i]].min <= validatedInteger && validatedInteger <= allowedCommands[commandArray[i]].max)
                                {
                                    i++;
                                    continue;
                                
                                }
                        }

                }
                continue
            

            default:
                console.log("unkown")
                return false
        }
    }
    return true
    
       
}
      
module.exports = validateCommandArray;