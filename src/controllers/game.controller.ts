import { Request, Response } from "express";

export const rockPaperScissor = (req: Request, res: Response) => {
    const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomChoice = ROCK_PAPER_SCISSORS[randomIndex];

  res.json({
    success: true,
    message: `You got ${randomChoice}`,
  });
}