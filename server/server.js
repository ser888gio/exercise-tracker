require('dotenv').config()

const express = require('express');

//Initializing an app by calling the express function
const app = express();

//middleware (what runs between req and res)
app.use((req, res, next) =>{
    console.log(req.path, req.method)
})

//If i will go to the root (localhost), this function will start with objects response & request as arguments. It returns a JSON response
app.get('/', (req, res)=>{
    res.json({mssg: 'Welcome'})

})


app.listen(process.env.PORT, () =>{
    console.log("Listening on port 4001")
})