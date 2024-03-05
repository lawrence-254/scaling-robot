const express = require('express');

const app = express();
app.use(express.static('static'));

app.get('/', (req, res) => {
    console.log('hello world');
})

app.listen(3000, () => {
    console.log('app started on port 3000');
});