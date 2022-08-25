const express = require('express'),
    morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
    {title: '3 Idiots'},
    {title: 'Crazy Rich Asians'},
    {title: 'The Eternals'},
    {title: 'The Parent Trap'},
    {title: 'Palm Springs'},
    {title: 'Juno'},
    {title: 'The Devil Wears Prada'},
    {title: 'Easy A'},
    {title: 'She\'s the man'},
    {title: 'The Edge of Seventeen'}
];

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});
  
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use('/documentation.html', express.static('public'));

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something went wrong!');
});
  
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
