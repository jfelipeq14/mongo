import 'dotenv/config'

export const {
  PORT = 3000,
  MONGO_URI = 'mongodb://localhost:27017/hermes'
} = process.env
