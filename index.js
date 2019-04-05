const express = require('express')
const databaseJa = require('./database/items')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello Fucking World</h1>')
})

const childAbility = databaseJa.getChildAbility
const items = databaseJa.getItems

app.get('/api/childAbility', (req, res) => {
  res.send(childAbility)
})

app.get('/api/items', (req, res) => {
  res.send(items)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`))