import express from 'express';
import cardService from '../services/cardServices';

var router = express.Router();

router.get('/all', function (req, res) {
  res.send(cardService.getAllCards());
});

router.get('/bank/:bankId', function (req, res) {
  res.send(cardService.getAllCardsFromBank(req.params));
});

router.get('/categ/all', function (req, res) {
  res.send(cardService.getAllCategories6(req.params));
});

router.get('/categ/staple', function (req, res) {
  res.send(cardService.getCertainCategory());
});

router.get('/categ/special', function (req, res) {
  res.send(cardService.getCertainCategory(false));
});

//Get rewards for card
router.post('/rewards', (req, res) => {
  res.send(cardService.getCardReward(req.body.cardId));
})

//Best card for category
//Add own card (that's not in my db)
router.post('/rewards/best', (req, res) => {
  res.send(cardService.getBestRewardCard(req.body));
})

export default router;
