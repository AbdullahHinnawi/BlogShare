'use strict';

var express = require('express');
var router = express.Router();

router.post('/api/blog', function (req, res) {
  res.send('post.blog');
});
router.get('/api/blog', function (req, res) {
  res.send('get.blog-get all blogs');
});
router.get('/api/blog/:id', function (req, res) {
  res.send('get.blog/:id - get blog by id');
});
router.put('/api/blog', function (req, res) {
  res.send('put.blog- update a blog');
});
router.delete('/api/blog', function (req, res) {
  res.send('delete.blog - delete a blog');
});

module.exports = router;