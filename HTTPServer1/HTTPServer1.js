const express = require("express");                           /* Somewhere in package of Node. */
const port = process.env.PORT || 3000;                        /* It means we are exposing our server into the 3000 port or at any PORT number as we want use by doing "export PORT=3006" in console. */
const app = express();                                        /* Here w eare calling the function of express and saving it to app as object, so we can access it anytime. */
app.use(express.json());                                      /* Without this the body part will never show. */
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get('/pranab', function(req,res){                         /* When we open the "localhost:3000/pranab", here "/pranab" is the route, it bydefault in GET mode, so it should give the respond "res" whatever written in this function, and in "req" it will take headers, body, parameters. */  
    res.json({                                                /* Here result will be in json format. */
        name: "Pranab Sethi",
        age: 25
    });
});


app.get('/', function(req,res){
    res.send("<b>Hello World this is ME.</b>");               /* This can be trigger when we do "localhost:3000/", we can send only one respond as per one request in EXPRESS, we are sending by HTML here. */
    console.log("Just checking whether console.log working in GET or not.");
});


app.post('/conversation', function(req,res){
    console.log(req.headers);                                 /* POST method doesn't show or render on the browser, so that's why we use "POSTMAN" to see what it is giving back. */
    console.log(req.headers["authorization"]);                /* Because of it not showing on the browser we are using the own terminal or console, Here the authorization part has been written in POSTMAN inside of headers by us. */
    res.send('<strike>Lets see what it is showing</strike>'); 
}); 


app.listen(port, () =>{                                       /* Start the server in this given port number, a server can have different port number, where multiple application can run, so it is better to mention at where we are accessing. */
    console.log('Here app is listening on port: ' +port);     /* It will simply print in the terminal. */
});  


app.post('/check', function(req,res){                         /* This can be triggered by doing "localhost:3000/check". */
    res.json({                                                /* It will print on the "POSTMAN". */
        message: "Lets see what it is showing",
        headers: req.headers,
        authorization: req.headers["authorization"],          
        body: req.body                                        /* Here also body part has been written inside of body in POSTMAN by us. */
    });
    console.log(req.body);
});   


app.post('/bodyCheck', function(req,res){                     /* Same as the  "express.json()", this body-parser is the oldest one only. */
    const message1 = req.body.message;                        /* This is actual body message, which was stored. */
    console.log(message1);
    const message2 = req.query.message2;                      /* Means these are the parameters, we have to pass in url like after the "/bodyCheck", it should be "?message2=122333&message3=53" or any number or any message. */
    console.log(message2);
    const message3 = req.query.message3;
    console.log(message3);
});


app.get('/timeout', (req,res) => {
    setTimeout( () => {                                       /* After 3 seconds it will start to show "Hey everyone!". */
        res.status(401).send("Hey everyone!");
    }, 3000);
});