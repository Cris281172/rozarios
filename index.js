const express = require('express');
const app = express();
app.use(express.static('assets'));
require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/menu', (req, res) => {
    res.render('menu');
})

app.get('/w-srodku', (req, res) => {
    res.render('slider')
})

app.get('/lokalizacja', (req, res) => {
    res.render('localization')
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});