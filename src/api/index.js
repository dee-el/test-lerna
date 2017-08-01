/**
 * Created by rheniere on 29/07/17.
 */
const express = require('express');
const web = require('web');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    console.log(web(1, 5));
    res.send('hello world');
});

app.get('/test', function (req, res) {
    console.log(web(1, 10));
    res.send('hello world !!!');
});

app.get('/test-2', function (req, res) {
  console.log(web(1, 12));
  res.send('hello world !!!+++++');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});