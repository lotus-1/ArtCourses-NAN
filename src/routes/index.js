const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send('we are in the router');
  res.render('home');
});

module.exports = router;
