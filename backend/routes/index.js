const router = require('express').Router();
const { procutDetail } = require('../controllers/products')
router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.get('/api/product', procutDetail)

module.exports = router;
