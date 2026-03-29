const express = require("express");
const fs = require("fs");
const app = express();


app.get('/files/:letSee', (req,res) => {                                               /* Here the ':' indicating whatever can be the input, like string or number or boolean, but at the end all these will be taken care like of string. */

    const name = req.params.letSee;                                                    /* Here we are saving the parameter into the name variable. */
    console.log(name);
    fs.readFile(`readFile/${name}`, "utf-8", function(err,data){                       /* We have installed the Node in Learning_EXPRESSJS so that's why when we will type /files/file.txt it will try to search the file.txt in root folder, not inside of readFile which it is actually in now. */

        if(err){

            return res.status(404).json({                                              /* If it will not find the file in machine then throw an error of "File not found". */

                error: "File not found"

            });

        }else{

            res.json({

                data                                                                   /* This is the main data which is written inside of the file.txt. */
            
            });

        }

    });
      
});

app.listen(3000);