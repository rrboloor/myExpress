const express = require("express")
const app = express()
// Express is
// 1. Router
// Middleware that comprises a webframework

// Req --> Middleware --> Res

function validateUser(req, res, next) {
    res.locals.validated = true
    console.log(res.locals.validated)
    console.log("Validated Ran")
    next()
}

app.use('/admin', validateUser)

app.get("/", (req, res, next) => {
    res.send("<h1>Hello World </h1>")
})

app.get("/admin", (req, res, next) => {

    res.send("<h1>Hello World </h1>")

})

app.listen(3000)


