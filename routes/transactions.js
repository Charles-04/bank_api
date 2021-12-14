const Transaction = require("../controllers/transactions")
const express = require('express')
const router = express.Router()

router.post('/deposit', Transaction.create_deposit);
router.post('/withdraw', Transaction.create_withdraw);
router.post('/reserve/:id', Transaction.reverse_transaction);
router.get('/:id', Transaction.all_transactions);

module.exports = router;