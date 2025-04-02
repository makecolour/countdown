var express = require('express');
var router = express.Router();
require('dotenv').config(); // Load environment variables

router.get('/', function(req, res, next) {
  const countdownDate = process.env.COUNTDOWN_DATE || '2021-01-01T00:00:00Z';
  const tryhardMessage = process.env.TRYHARD_MESSAGE || '';
  res.render('index', {
    title: 'Countdown', 
    countdownDate,
    tryhardMessage
  });
});

module.exports = router;