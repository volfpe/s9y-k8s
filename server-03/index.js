const express = require('express')
const fetch = require("node-fetch")
const app = express()
const port = 3000

let ready = false


app.get('/', async (req, res) => {
    const serviceResultResponse = await fetch('http://server-service:3000/')
    const serviceResultResponseText = await serviceResultResponse.text()
    console.log(serviceResultResponseText)
    return res.send('response was ' + serviceResultResponseText)
})

app.listen(port, () => console.log(`App listening at port ${port}!`))