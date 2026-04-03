const express = require('express');
const app = express();
let errorCount = 0;


app.get("/error", (req, res) => {

    throw new Error("This is a test error");                                      /* Here the error occured so that's why it stops the normal flow of execution of this code, and try to find the error handling middleWare. */

});

app.get('/', (req,res) => {                                                       /* Doesn't matter how many times we hit this URL it never trigger the error handling middleWare, so count of errorCount always be 0. */

    res.json({

        message: "Now lets see whether the errorCount getting trigger or not!!!",
        count: errorCount

    });

});

app.use(function(err,req,res,next){                                               /* We always should keep our error handling middleWare at the bottom, because in express the middleWares act from top to bottom, so that not even a single route will miss to trigger the error handling middleWare. */

    errorCount++;
    console.log("Total errors so far:", errorCount);
    console.log("Error message:", err.message);

    res.status(500).json({

        msg: "Something went wrong",
        totalErrors: errorCount
        
    });

});

app.listen(3000);