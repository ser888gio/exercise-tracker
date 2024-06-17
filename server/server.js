require('dotenv').config()

const express = require('express');
const routesWorkout = require('./router/routes')
//Initializing an app by calling the express function
const app = express();
const mongoose = require('mongoose')


//middleware (what runs between req and res)
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


/*If i will go to the root (localhost), this function will start with objects response & request as arguments. It returns a JSON response
app.get('/', (req, res)=>{
    res.json({mssg: 'Welcome'})

})
*/

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log("Listening on port", process.env.PORT + '. Connected to the DB')
        })
    })
    .catch((error) => {console.log(error)})

app.use('/api/workouts' , routesWorkout)


