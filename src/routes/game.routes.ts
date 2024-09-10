import express from 'express'
import { rockPaperScissor } from '../controllers/game.controller'
import { rateLimitMiddleware } from '../middlewares/api-rate-limit.middleware'

const router = express.Router();

router.route('/game').get(rateLimitMiddleware, rockPaperScissor)

export default router;