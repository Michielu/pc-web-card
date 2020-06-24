import express from 'express';
import cardService from '../services/cardServices';

var router = express.Router();

/* GET users listing. */
router.get('/all', function (req, res, next) {
  res.send(cardService.getAllCards());
});

router.get('/bank/:bankId', function (req, res, next) {
  res.send(cardService.getAllCardsFromBank(req.params));
});

router.get('/categ/all', function (req, res, next) {
  res.send(cardService.getAllCardsFromBank(req.params));
});

router.get('/categ/staple', function (req, res, next) {
  res.send(cardService.getCertainCategory());
});

router.get('/categ/special', function (req, res, next) {
  res.send(cardService.getCertainCategory(false));
});



export default router;
