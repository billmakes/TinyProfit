const express = require('express')

const TinyController = require('../controllers/assets')

const router = express.Router()

router.get('/api/v1/assets/', TinyController.getAssets)

module.exports = router
