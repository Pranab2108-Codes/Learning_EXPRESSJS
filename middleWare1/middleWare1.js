const express = require('express');
const app1 = express();


app1.get('/health-checkup1' , (req,res) => {

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;
    if(username === "Pranab" && password === "Pranab#100"){

        if(kidneyID == 1 || kidneyID == 2){

            res.json({

                message: "Your kidney is fine..."
            
            });

        }
        else{

            res.json({

                message: "Your kidneyID is not valid..."

            });

        } 

    }
    else{

        res.status(400).json({

            message: "No the inputs are wrong...."

        });

    }

});

app1.listen(3000);


const app2 = express();
function usernameValidator(username, password) {

    if (username === "Pranab" && password === "Pranab@100") {

        return true;

    }
    return false;
}

function kidneyValidator(kidneyID) {

    if (kidneyID == "1" || kidneyID == "2") {

        return true;

    }
    return false;
}

app2.get("/health-checkup2", function (req, res) {
   
    const kidneyID = req.query.kidneyID;
    if (!usernameValidator(req.query.username, req.query.password)) {

        res.status(403).json({

            msg: "User doesnt exist"

        });
        return;

    }

    if (!kidneyValidator(req.query.kidneyID)) {

        res.status(411).json({

            msg: "wrong inputs for kidneyId"

        });
        return;

    }
    res.send("Your kidney is healthy");

});

app2.put("/replace-kidney", function (req, res) {

    if (!usernameValidator(req.query.username, req.query.password)) {

        res.status(403).json({

            msg: "User doesnt exist"

        });
        return;

    }

    if (!kidneyValidator(req.query.kidneyID)) {

        res.status(411).json({

            msg: "wrong inputs for kidneyId"

        });
        return;

    }
    res.send("Your kidney is healthy");

});

app2.listen(3001);