'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); //const express = require('express');


router.get('/api/user', function (req, res) {
  return res.json({ message: 'HEllo WOrld' });
});

module.exports = router;