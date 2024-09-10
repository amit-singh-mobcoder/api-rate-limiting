import {Request, Response} from 'express'
import {tokenBucket, RATE_LIMIT} from '../utils/tokenBucket'

export const checkBucketStatus = (req: Request, res: Response) => {
    res.json({
        bucketLimit: RATE_LIMIT,
        currentBucketSize: tokenBucket.length,
        bucket: tokenBucket
    })
}