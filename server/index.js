const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('incoming request')
    return res.send('Hello from Kubernetes!')
})

app.get('/ready', (req, res) => {
    console.log('incoming ready request')
    return res.status(200).send()
})

app.listen(port, () => console.log(`App listening at port ${port}!`))