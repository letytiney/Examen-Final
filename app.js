const express = require('express')
const hbs = require('hbs')

require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Sandra Tiney S. ',
        carnet: '2290-16-22043',
        titulo: 'Perros domesticos'
    })
})
app.get('/pastor_aleman', (req, res)=>{
    res.render('pastor_aleman', {
        nombre: 'Sandra Tiney S. ',
        carnet: '2290-16-22043',
        titulo: 'Pastor Aleman'
    })
})
app.get('/golden', (req, res)=>{
    res.render('golden', {
        nombre: 'Sandra Tiney S. ',
        carnet: '2290-16-22043',
        titulo: 'Raza Golden'
    })
})
app.get('/pequines', (req, res)=>{
    res.render('pequines', {
        nombre: 'Sandra Tiney S. ',
        carnet: '2290-16-22043',
        titulo: 'Raza Pequines'
    })
})
app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})
