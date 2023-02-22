const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogPostRoutes = require('./blogpost-routes');
const commentsRoutes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/blogpost', blogPostRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
