const express = require("express")


const app = express()  //create an express application

app.all('*', (req, res) => {
    //express handles the basic headers and status codes for us
    //
    res.send("Hello World")
})
app.listen(3000, () => {
    console.log("Listening on port 3000")
})