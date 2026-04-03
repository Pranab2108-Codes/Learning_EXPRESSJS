const express = require('express');
const app1 = express();


app1.get('/health-checkup', callBackfunction1 , callBackfunctiion2, ..... , (req,res) =>{           /* There can be multiple middleWare functions can be present all at one place. */
    
                                                                                                    /* logic for this one. */

});


app1.get('/health-checkup', (req,res,next) => {                                                     /* Actually there are total 3 parameters exist , we may or may not be use these 3 all ate once based on the situation, while hitting route. */

    console.log("Hi from req1...");
    next();                                                                                         /* Here because of next() the execution flow will go to the next function/middleWare which it chained with. */

    }, (req,res,next) => {                                                                          /* When functions will be called in a chain manner one after one, where the function is depended only of the previous function that is being called as middleWare. */

        console.log("Hi from req2...");
        next();                                                                                     /* After this next(), last flow of execution will go to this last function which descripbe the definition of it's own GET method. */

    }, (req,res) => {                                                                               /* This is the definition of the GET method. */

        console.log("Hi from req3 which is the last function for itself...");

});

app1.listen(3000);


const app2 = express();
let numberOfRequests = 0;


function calculateNumberOfRequests(req,res,next){

    numberOfRequests++;
    console.log(numberOfRequests);
    next();                                                                                         /* If we ever remove this next() then it will still keep count or increment the variable numberOfRequests but in browser it will hung, because flow of execution never go to it's next function which is a GET method. */

}

app2.get('/calculateRequests1', calculateNumberOfRequests , (req,res) => {                          /* As much as the number of times we hit this route it will increment the variable numberOfRequests. */

    res.send("Request recieved...🥳");                                                              /* The browser will get hung also in this case , let we have applied next() in middleWare but here in GET method we are not responding anything, means if we ever remove the line of res.json({ }) or res.send(" "). */

});

app2.get('/calculateRequests2', calculateNumberOfRequests , (req,res) => {                          /* As much as the number of times we hit this route it will increment the variable numberOfRequests, here we can say the calculateNumberOfRequests is acting as middleWare, and whenever it is being called it called as a normal variable not as function(). */

    res.send("Request recieved...🥳");

});

app2.listen(3001);


const app3 = express();


app3.use(calculateNumberOfRequests);                                                                /* We can call this calculateNumberOfRequests inside of the app.use() also when we get to know this middleWare will be called in each and every route, whatever coming below of it. */

app3.get('/calculateRequests3', (req,res) => {

    res.json({

        "message" : "Here we calling middleware but using app.use(calculateNumberOfRequests)."
    });

});

app3.get('/calculateRequests4', (req,res) => {

    res.json({

        "message" : "Here we calling middleware but using app.use(calculateNumberOfRequests)."

    });

});

app3.listen(3002);