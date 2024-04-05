"use strict";

var express = require('express');

var app = express();
var fileSeverMiddleWare = express["static"]('public');
app.use('/', fileSeverMiddleWare);
app.listen(3000, function () {
  console.log('app started on localhost port 3000');
});