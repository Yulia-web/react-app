const Router = require('express')
const router = new Router()
const reviewedController = require('../controllers/reviewedController')

router.post('/', reviewedController.create)
router.get('/', reviewedController.getAll)
router.delete('/', reviewedController.delete)

module.exports = router