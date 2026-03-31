const express = require('express');
const app = express();
app.use(express.json());


function userMiddleware(req,res,next){

    if(req.query.username === "Pranab" && req.query.password === "Pranab@100"){

        next();

    }else{

        res.status(403).json({

            message: "Incorrect inputs of username or password..."

        });

    }

}

function kidneyMiddleware(req,res,next){

    if(req.query.kidneyID == 1 || req.query.kidneyID == 2){

        next();

    }else{

        res.status(403).json({

            message: "Incorrect kidneyID..."

        });

    }

}

app.get('/kidney-checkup',userMiddleware,kidneyMiddleware, (req,res) => {                                    /* Whenever we want to use the same members or variables which will be call at many places while hitting the route, we use middleWare, like here the middleWares are userMiddleware,kidneyMiddleware. */

    res.send("Your Kidneys are healthy...");

});

app.get('/heart-checkup',userMiddleware, (req,res) => {

    res.send("Your heart is healthy...");

});

app.get('/health-checkup',userMiddleware, kidneyMiddleware, (req,res) => {

    res.send("Your body is totally healthy...");

});

app.listen(3000);