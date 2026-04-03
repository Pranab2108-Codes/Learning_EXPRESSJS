const express = require('express');
const app = express();


let numberOfRequestsForUser = {};

setInterval( () => {

    numberOfRequestsForUser = {};

},3000);                                                                          /* Here it saying after each 3 seconds the object numberOfRequestsForUser will get replace with an empty object, or it become empty again. */

app.use(function(req,res,next){

    const userID = req.headers["user-id"];                                        /* Whether we are writting user-ID or user-id in headers, it will always written inside of headers in small alphabetic letters. */
    if(numberOfRequestsForUser[userID]){

        if(numberOfRequestsForUser[userID] >5){                                   /* In 3 seconds if URL being hitted beyond 5 times, then it will show error with status code 429. */

            res.status(429).send("Limit goes beyond 5");

        }
        else{
        
            numberOfRequestsForUser[userID]++; 
            next();

        }

    }else{

        numberOfRequestsForUser[userID] =1;                                       /* Because of this the userID became the key and this 1 became the value of it. */
        next();

    }
    
});

app.get('/', (req,res) => {

    const userID = req.headers["user-id"];
    res.json({

        message: "You are within the limit",
        count: numberOfRequestsForUser[userID]

    });

});

app.listen(3000);