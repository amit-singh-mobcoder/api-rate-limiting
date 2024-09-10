import express,{ Application, NextFunction, Request, Response } from 'express'
import { CronJob } from 'cron'

const app: Application = express()
app.use(express.json())

const RATE_LIMIT = 10;
const tokenBucket: number[] = [];


// function to fill the bucket
const refillBucket = () => {
    if(tokenBucket.length < RATE_LIMIT){
        tokenBucket.push(Date.now())
    }
}

// API endpoint to check the bucket's status
app.get('/bucket', (req, res) => {

    res.json({
        bucketLimit: RATE_LIMIT,
        currentBucketSize: tokenBucket.length,
        bucket: tokenBucket
    })
})

// Middleware for rate limiting
const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {

    if(tokenBucket.length > 0){
        const token = tokenBucket.shift();
        console.log(`Token ${token} is consumed`);

        res.set('X-RateLimit-Remaining',tokenBucket.length.toString());
        next()
    } else {
        res.status(429).set('X-RateLimit-Remaining', '0').set('Retry-After', '2').json({
            success: false,
            message: 'Too many requests'
        })
    }
}

// middleware
app.use(rateLimitMiddleware);

// sample endpoint for testing rate limiting
app.get('/test', (req, res) => {
    const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomChoice = ROCK_PAPER_SCISSORS[randomIndex];

    res.json({
        success: true,
        message: `You got ${randomChoice}`
    })
})


// Cron job to periodically refill the bucket
export const job = new CronJob('*/2 * * * * *', () => {
    refillBucket();
})

export { app }