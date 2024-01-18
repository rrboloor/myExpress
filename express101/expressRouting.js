const express = require("express")


const app = express()
// 1. get
//2. post
//3. delete
//4. put


// take 2 args , { path and callback function }
app.get("/", (req, res) => {
    res.send("Welcome to home page(GET)")
}
)

app.post("/", (req, res) => {
    res.send("welcome to home page(POST)")
})



app.listen(3000)