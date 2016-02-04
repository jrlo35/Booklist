var path = require('path');
var archive = require('../helpers/archive-helpers');
var headers = require('./http-helpers.js');
var fs= require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // res.statuscode = 200;
  // if(req.method==='POST'){
  //   fs.(archive.paths.list);
  // }
  // if(req.method === 'GET'){
  //   res.writeHead(res.statuscode, headers.headers);
  //   fs.readFile(archive.paths.list, res.end)
  //   //res.end(archive.paths.list);
  // }
var filepath=
  res.end(archive.paths.list);
};
