var express = require('express');
var router = express.Router();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/time', function(req, res, next) {
  res.json({
    "time": Date.now().toLocaleString("en-US", options),
  });
});

module.exports = router;
