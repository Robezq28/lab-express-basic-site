const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/photo-gallery', (req, res) => {
    res.render('photo-gallery')
})

app.get('/works', (req, res) => {
    res.render('works')
})


app.listen(3000, () => console.log("Server listening on port 3000"))