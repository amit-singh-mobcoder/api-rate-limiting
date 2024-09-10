# Learn the Essentials of API Rate Limiting to Keep Your Applications Running Smoothly

## What is Rate Limiting?
Rate limiting is a technique used to control the number of requests a client (a user or application) can make to a server within a specified time frame.

Think of an API as an ATM machine, and API requests as people withdrawing cash from it. The bank imposes a rate limit on how many transactions can occur in a given time frame (e.g., withdrawals per minute). If too many people try to withdraw money simultaneously, the ATM may restrict access to maintain security and service availability. Rate limiting in this context ensures that the ATM functions smoothly and prevents potential issues due to excessive demand.

## Why Do We Need Rate Limiting?
Imagine a scenario where a website doesn’t have rate limiting. A single user or a malicious bot could flood the server with hundreds of requests per second, making it slow or unresponsive for everyone else. Rate limiting prevents such abuse.

Additionally, consider a scenario where you want to provide different levels of service to users based on their subscription tiers. For instance, paid users might be entitled to more processing power and resources, while free users should have limited access. Rate limiting enables you to enforce these tier-based restrictions, ensuring that each user group receives the appropriate level of service without overloading the server.

## How Does Rate Limiting Work?
Rate limiting sets predefined rules for how many requests a client can make in a given time period. The two main components are:

- `Rate Limit`: This defines the maximum number of requests allowed within a specific time frame, like 100 requests per minute.
- `Time Window`: The duration during which the client can make the specified number of requests.


## Implementing Rate-Limiting Strategies
1. Token Bucket Algorithm
2. Leaky Bucket Algorihtm

`Token Bucket Algorithm` : The Token Bucket Algorithm is a simple yet effective technique used to control the rate at which requests are made to a system or server.

Picture it as an actual bucket that gets filled with tokens over time. Each token represents permission to make one request. When a client wants to make an API request, it must possess a token from the bucket. If tokens are available, the request is granted, and a token is consumed. If the bucket is empty, the request is denied until more tokens are added over time.

Let’s break down how this algorithm works in a straightforward manner:

Step 1: Create a Bucket
Imagine you have a bucket with a fixed capacity, which we’ll call the “rate limit.” This bucket can hold a certain number of tokens. In our example, we’ll set a rate limit of 10 tokens.

Step 2: Refill the Bucket
The bucket isn’t static; it periodically gets refilled with tokens. This is a crucial aspect of the Token Bucket Algorithm. Tokens are added to the bucket at a fixed rate. For instance, in our code, the bucket gets refilled every 2 seconds.

Step 3: Incoming Requests
When a request comes in, we check if there are any tokens in the bucket.

Step 4: Consume Tokens
If there are tokens in the bucket, we “consume” one token from it. This means the request is allowed to proceed. We also keep track of when the token was consumed.

Step 5: Empty Bucket
If the bucket is empty (no tokens available), we reject the request. This helps in preventing overloading of the server or system, ensuring that it operates within its defined limits.

Implementing the Token Bucket Algorithm:
Now, let’s take a look at code that implements the Token Bucket Algorithm using Node.js and the ExpressJS frame