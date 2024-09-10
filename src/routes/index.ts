import express from 'express'
import buckerRoutes from './bucket.routes'
import gameRoutes from './game.routes'

const router = express.Router()

router.use(buckerRoutes);
router.use(gameRoutes)

export default router;
