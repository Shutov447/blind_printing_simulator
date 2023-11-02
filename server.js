'use strict';

const http = require('http');
const fileUpload = require('./custom_node_modules/JS/file_upload.js');

let HOST = 'rtvsl37' || 'localhost';
let PORT = 8000;

http
  .createServer((req, res) => {
    fileUpload(req.url, res);
  })
  .listen(PORT, HOST);
