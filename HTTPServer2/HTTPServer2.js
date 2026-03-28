const express = require("express");
const app1 = express();
function calculateSum(n){

    let ans =0;
    for(let i =1;i<=n;i++){

        ans += i;

    }
    return ans;

}

app1.get('/', (req,res) => {

    const n = req.query.number;
    const ans = calculateSum(n);
    res.send(ans);

});

app1.listen(3000, () =>{

    console.log("The app1 is running on port number: ",3000);

});

const app2 = express();
function getSum(a,b){

    return a+b;

}

app2.get('/', (req,res) => {                                                    /* Here we can run different app inside of the same file but the port number should be different. */

    const a = Number(req.query.number1);                                        /* Bydefault we know it pass as string so that's why we are converting in Number data type. */
    const b = Number(req.query.number2);
    const ans = getSum(a,b);
    res.send(ans);

});

app2.listen(3001, () => {

    console.log("The app2 is running on port number: ",3001);

});