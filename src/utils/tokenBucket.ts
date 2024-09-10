export const tokenBucket: number[] = []
export const RATE_LIMIT: number = 10;
const REFILL_INTERVAL: number = 2000;

const addToken = () => {
    if(tokenBucket.length < RATE_LIMIT){
        tokenBucket.push(Date.now())
    }
}

const startFillingBucket = () => {
    setInterval(() => {
        addToken();
    }, REFILL_INTERVAL)
}

startFillingBucket()