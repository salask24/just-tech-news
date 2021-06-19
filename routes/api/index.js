const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes')

router.use('/user', userRoutes);
router.use('/post', postRoutes)

module.exports = router;

//we build the middle portion of URLs in the index.js