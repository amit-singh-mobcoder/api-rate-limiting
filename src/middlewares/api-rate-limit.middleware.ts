import {Request, Response, NextFunction} from 'express'
import {tokenBucket} from '../utils/tokenBucket'

export const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
   
    if(tokenBucket.length > 0){
        const token  = tokenBucket.shift();
        console.log(`Token ${token} is consumed`);

        res.set('X-RateLimit-Remaining', tokenBucket.length.toString())
        next()

    }else {
        res.status(429).set('X-RateLimit-Remaining', '0').set('Retry-After', '2').json({
            success: false,
            message: 'Too many request'
        })
    }
}