import express from 'express'
import { checkBucketStatus } from '../controllers/bucket-status.controller'

const router = express.Router()

router.route('/bucket').get(checkBucketStatus);

export default router;