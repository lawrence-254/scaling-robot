const express = require('express');

const app = express();
const fileSeverMiddleWare = express.static('public');
app.use('/', fileSeverMiddleWare)


app.listen(3000, () => {
    console.log('app started on localhost port 3000');
});