const express = require("express");
const app = express();
app.use(express.json());


app.post("/health-checkup", function (req, res) {

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("Your kidney length is " + kidneyLength);

});

app.use((error, req, res, next) => {                                         /* This is a global catch where it need total 4 parameters, it will handle the error all at one place, instead of handling the error in routes. */

    res.status(500).send('An internal server error occurred');               /* Global catches always should be present at the bottom of all routes so it can lastly handle the error after execution of all routes, it used the app.use(). */

});

app.listen(3000);