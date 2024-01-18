const express = require("express")

const app = express()
app.use(express.static("public"))  // there can be multiple static construct.





app.listen(3000)
