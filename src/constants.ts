import dotenv from 'dotenv'
dotenv.config()

type ConstantsI = {
    PORT:number
}

export const constants: ConstantsI = {
    PORT : Number(process.env.PORT) || 8000,
}