const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

console.log('Server is running on port 3000');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test.js', (req, res) => {
    res.sendFile(__dirname + '/index.e92a930e.js');
});