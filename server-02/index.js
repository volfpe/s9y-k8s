const express = require('express')
const app = express()
const port = 3000

let ready = false


app.get('/', (req, res) => {
    console.log('incoming request')
    return res.send('Hello from updated Kubernetes!')
})

app.get('/ready', (req, res) => {
    console.log('incoming ready request')
    if (!ready) {
        setTimeout(() => {
            ready = true
        }, 10000)
        return res.status(400).send()
    }
    return res.status(200).send()
})

app.listen(port, () => console.log(`App listening at port ${port}!`))