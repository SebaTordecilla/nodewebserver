require('dotenv').config();
const express = require('express');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT;




hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.set('view engine', 'hbs');

//servir contendio estatico

app.use(express.static('public'));

/*app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Seba Tordecilla',
        titulo: 'Node EXpress'
    })
});*/


/*app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Seba Tordecilla',
        titulo: 'Node EXpress'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Seba Tordecilla',
        titulo: 'Node EXpress'
    })
});*/

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})