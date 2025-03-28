//to run code - node file name
// to run from package .json add scripts
// console.log("chai aur code");


//dotenv private things when on other device port may vary other security
require('dotenv').config()
const express = require('express')
// othe method for line 5 below (commonJS and ModuleJS)
// import express from "express "
const app = express()
const port = 4000

//req = request , res = response
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('<h1>hello world do again</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Exapmle app listening on port ${port}`)
})