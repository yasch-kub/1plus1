var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello D.Y.K.');
});

module.exports = router;
