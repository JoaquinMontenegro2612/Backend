const express = require('express')
const app = express()
const Container = require('./contenedor')
const PORT = 8080

const products = new Container('./productos.txt')

app.get('/productos', (req, res) => {
res.json(products.getAll())

})

app.get('/', (req, res) => {
res.send('Hola after')
})
app.listen(PORT, () => console.log('El servidor esta escuchando en puerto 8080'))
