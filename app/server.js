'use strict';

const express = require('express');
const os = require('os');
const PORT = 80;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  var date = new Date((new Date()).getTime())
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds())+'.';
  var ms = date.getMilliseconds();
  var now = Y+M+D+h+m+s+ms;
  res.send('Hello world! Now is '+now+'.\nRunning on '+os.hostname()+'.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
