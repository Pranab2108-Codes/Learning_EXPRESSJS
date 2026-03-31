const express = require("express");
const z = require("zod");                                                         /* We have to import the library of "zod" before using it. */
const app1 = express();
app1.use(express.json())
const schema1 = z.array(z.number());                                              /* Schema here define in which way our input should be look like, here it should look like array of numbers. */
                                                                                  /* This schema always should mentioned into the body in Postman. */

app1.post("/zodValidation1", function (req, res) {                                /* We use zod validation for validating the inputs. */

    const kidneys = req.body.kidneys;
    const response = schema1.safeParse(kidneys);                                  /* Here "safeParse" is being used for giving the validation on input, here we have passed kidneys on it. */
    if(!response.success){

        res.status(411).json({

            message: "inputs are invalid",
            error: response

        });
        

    }else{

        res.send({

            message: "Here the data is in same manner the way we want our input is to be shown through schema1...",
            data: response

        });

    }

});

app1.listen(3000);


const app2 = express();
app2.use(express.json());
const schema2 = z.object({                                                        /* This schema always should mentioned into the body in Postman, here we want our input or schema2 should look like the objects. */
    
    email: z.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),                                 /* Here it doesn't mean the string should contains either "IN" or "US" continuously, rather it says the string only contain either "IN" or "US". */
    kidneys: z.array(z.number())
    
});

app2.post("/zodValidation2", function (req, res) {

    const response = schema2.safeParse(req.body);
    if(!response.success){

        res.status(411).json({

            message: "Inputs are invalid...",
            error: response

        });

    }else{

        res.send({

            message: "The data is in correct manner the way we want our input to be shown through shcema2...",
            data: response

        });

    }

});

app2.listen(3001);