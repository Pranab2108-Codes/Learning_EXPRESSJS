const jwt = require('jsonwebtoken');
const jwtToken = "secret";                                                                       /* Here the "secret" is not a token, but more of a passkey/secretkey for signin and verify. */
const zod = require('zod');

 
const emailSchema = zod.string().email();                                                        /* Here we are making the schema of email should look like an email. */
const passwordSchema = zod.string().min(6);                                                      /* Here we are setting the schema for password like, it should atleast accept 6 character. */

function signJWT(username, password){

    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success) return null;
    const signature = jwt.sign({username}, jwtToken);
    return signature;

}

const ans1 = signJWT("HeyBro","WhoisThis");
console.log(ans1);
const ans2 = signJWT("pranabsethi053@gmail.com","Pranab#100");
console.log(ans2);

function decodeJWT(token){

    const decoded = jwt.decode(token);                                                            /* The decode() always return either payLoad object or the null bydefault, but as per our code when the decode() giving us payLoad object we are returning true otherwise false. */
    if(decoded) return true;
    else return false;

}

const ans3 = decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5hYnNldGhpMDUzQGdtYWlsLmNvbSIsImlhdCI6MTc3NTIwMTcwNn0.gSN8zkXRgSIDmgt_gHzjtLz_L_JmalcpyS15CK2_Zfs");
console.log(ans3);                                                                                /* Through decode we can actually get it's original payLoad object, here it neither check the signature nor it validate token. */
const ans4 = decodeJWT("akhdhqdjopwqr7246725ndlkanl##@$knakc%^%^&csjcklsa1");
console.log(ans4);

function verifyJWT(token, jwtPassword){                                                           /* Here the verify() return either the payLoad object or throw an error if it won't pass the verification. */
               
    let ans = true;                                                                               /* The verify() not only check for the signature, but also check for the validation of token, here it will check whether the secret key is being passing by the same machine where the backend server was actually generated to or not. */
    try{                                                                                          /* The suspicious lines which might throw the errors, should be put into the try block and it's handling process of those errors should be include inside catch block. */

        const verified = jwt.verify(token, jwtPassword);
        if(verified) return true;

    }catch(error){

        ans = false;

    }
    return ans;

}

const ans5 = verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5hYnNldGhpMDUzQGdtYWlsLmNvbSIsImlhdCI6MTc3NTIwMTcwNn0.gSN8zkXRgSIDmgt_gHzjtLz_L_JmalcpyS15CK2_Zfs",jwtToken);
console.log(ans5);
const ans6 = verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5hYnNldGhpMDUzQGdtYWlsLmNvbSIsImlhdCI6MTc3NTIwMTcwNn0.gSN8zkXRgSIDmgt_gHzjtLz_L_JmalcpyS15CK2_Zf",jwtToken);
console.log(ans6);
