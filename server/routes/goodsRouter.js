const Router = require('express')
const router = new Router()
const goodsController = require('../controllers/goodsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', goodsController.create)
router.get('/', goodsController.getAll)
router.get('/:id', goodsController.getOne)
router.delete('/', goodsController.delete)

module.exports = router