const express = require("express");
const app = express();
app.use(express.json()); 
const users = [

    {

        name: "Steve",
        kidneys: [

            {

                healthy: false

            },
            {

                healthy: true

            }
            
        ]

    }

];

app.get('/', (req,res) => {

    const steveKidneys = users[0].kidneys;
    const totalNumberOfKidneys = steveKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<steveKidneys.length;i++){

        if(steveKidneys[i].healthy == true) numberOfHealthyKidneys++;

    } 
    const numberOfUnhealthyKidneys = totalNumberOfKidneys - numberOfHealthyKidneys ;
    res.json({                                                                        /* It's a short form of writting the whole key: value pair manner. */

        steveKidneys,                                                                 /* But here we can clearly see we have used the variable names which is defined in our code only, if we ever want to put like req.headers it won't work because it is an expression not a variable. */
        totalNumberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys

    });

});

app.post("/", (req,res) => {

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({ 

        healthy: isHealthy 

    });
    res.json({

        message: "Done..."

    });

});

app.put('/', (req,res) => {

    if(isThereAtleastOneUnhealthyKidney() == true){

        for(let i =0;i<users[0].kidneys.length;i++){

            if(users[0].kidneys[i].healthy == false) users[0].kidneys[i].healthy = true;

        }
        res.json({

            "message" : "Everything is fine Kidney got Replcaed...☺️"

        });

    }else{

        res.status(411).json({

            message: "You don't have any Bad Kidneys...😮‍💨"

        });

    }

});

app.delete('/', (req,res) => {

    if(isThereAtleastOneUnhealthyKidney()){

        const removeBadKidneys = [];
        for(let i =0;i<users[0].kidneys.length;i++){

            if(users[0].kidneys[i].healthy == true){

                removeBadKidneys.push({

                    healthy: true

                });

            }

        }
        users[0].kidneys = removeBadKidneys;
        res.json({

            relax: "Your bad kidney got removed...☺️"

        });

    }else{

        res.status(412).json({

            message: "You don't have any Bad Kidneys...😮‍💨"

        });

    }
    
});

function isThereAtleastOneUnhealthyKidney() {

    let atleastOneUnhealthyKidney = false;
    for(let i =0;i<users[0].kidneys.length;i++){

        if(users[0].kidneys[i].healthy == false){

            atleastOneUnhealthyKidney = true;
            break;

        }

    }
    return atleastOneUnhealthyKidney;

}

app.listen(3000);
