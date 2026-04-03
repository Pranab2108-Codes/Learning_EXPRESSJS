const express = require('express');
const app1 = express();


function ageValidate(age){

    if (age > 16) return true;
    else return false;

}

app1.get('/ride1', (req,res) => {

    if(!ageValidate(req.query.age)){

        return res.status(411).json({

            message: "No you are not allowed because of your age..."
        
        });

    }
    res.json({

        message: "You have successfully riden the ride 1..."
    
    });

});

app1.get('/ride2', (req,res) => {

    if(!ageValidate(req.query.age)){

        return res.status(411).json({

            message: "No you are not allowed again because of your age..."
        
        });

    }
    res.json({

        message: "You have successfully riden the ride 2 as well..."
    
    });

});

app1.listen(3000);


const app2 = express();


function isOldEnoughMiddleWare(req,res,next){

    if(req.query.age > 16){

        next();

    }
    else{

        res.status(403).json({

            message: "Sorry you are not of age yet..."

        });

    }

}

app2.get('/ride3', isOldEnoughMiddleWare, (req,res) => {

    res.json({

        message: "You have successfully riden the ride 3..."
    
    });

});

app2.get('/ride4', isOldEnoughMiddleWare,  (req,res) => {

    res.json({

        message: "You have successfully riden the ride 4 as well..."
    
    });

});

app2.listen(3001);