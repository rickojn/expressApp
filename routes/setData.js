var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    res.send('respond with a resource');
});

module.exports = router;
