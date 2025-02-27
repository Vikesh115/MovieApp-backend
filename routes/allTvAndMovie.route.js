const express = require('express');
const router = express.Router();
const {movieAndTvPopulate, getMovieAndTv ,searchMovieOrTv, getDetails} = require('../controllers/allMovieAndTv.controller');

router.get('/populate', movieAndTvPopulate);
router.get('/getMovieAndTv', getMovieAndTv);
router.get('/getTvorMovie/:search',searchMovieOrTv);
router.get('/detail/:id', getDetails)

module.exports = router;