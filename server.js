'use strict';

const http = require('http');
const fileUpload = require('./custom_node_modules/JS/file_upload.js');

let PORT = process.env.PORT ?? 80;
let HOSTNAME = process.env.HOSTNAME ?? '5.35.13.205';

http
  .createServer((req, res) => {
    fileUpload(req.url, res);
  })
  .listen(PORT, HOSTNAME);
