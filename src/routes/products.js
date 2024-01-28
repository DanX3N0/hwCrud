const express = require('express')

const router = express.Router()

let products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 250,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 350,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description 3',
    price: 330,
  },
]

router.get('/', (req, res) => {
  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const productId = products.findIndex((product) => product.id == id)

  if (productId !== -1) {
    res.json(products[productId])
  } else {
    alert('No se encontro el producto')
  }
})

router.post('/', (req, res) => {
  const newProduct = req.body
  products.push(newProduct)
  res.status(201).json(newProduct)
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, description, price } = req.body
  const productId = products.findIndex((item) => item.id == id)

  if (productId !== -1) {
    products[productId].name = name
    products[productId].description = description
    products[productId].price = price
    res.json(products[productId])
  } else {
    res.status(404).json({ message: 'Error, no existe el producto.' })
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  products = products.filter((product) => product.id != id)
  res.json({ message: 'Producto eliminado' })
})

module.exports = router
