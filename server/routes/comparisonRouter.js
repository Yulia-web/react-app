const Router = require('express')
const router = new Router()
const comparisonController = require('../controllers/comparisonController')

router.post('/', comparisonController.create)
router.get('/', comparisonController.getAll)
router.delete('/', comparisonController.delete)

module.exports = router