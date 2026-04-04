const jwt = require('jsonwebtoken');


const value = {

    name: "Pranab Sethi",
    accountNumber: 7077815142

};

const token = jwt.sign(value, "secret");       /* The secret should be keep by bank, if ever looses this, then anyone can recreate that kind of cheque through machine generator which was used back then. */
console.log(token);                            /* It is a signature which have been got after doing the sign. */
const tokenVerify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUHJhbmFiIFNldGhpIiwiYWNjb3VudE51bWJlciI6NzA3NzgxNTE0MiwiaWF0IjoxNzc1MTk4OTI5fQ.XOwIN8eoGQnYeYy6S-gMGL46sdsW4slbHWEwhFAXEWU", "secret");
console.log(tokenVerify);                      /* Here the token can be only verify by that server/machine which has been signed in while generating, otherwise the backend server will reject it. */