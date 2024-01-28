const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3000
const HOST = 'localhost'

const productsRoute = require('./routes/products')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/products', productsRoute)

app.use(express.static('public'))

app.use((req, res) => {
  res.status(404).send('Pagina no encontrada')
})

app.listen(PORT, HOST, () => {
  console.log(`Server run on http://${HOST}:${PORT}`)
})
