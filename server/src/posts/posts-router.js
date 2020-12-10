const router = require('express').Router()
const postsController = require('./posts-controller')

router.get('/', postsController.getPosts)
router.get('/:id', postsController.getPostById)
router.post('/', postsController.addPost)
router.put('/:id', postsController.updatePost)
router.delete('/:id', postsController.delPost)

module.exports = router