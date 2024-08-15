import mongoose from 'mongoose'
import 'dotenv/config'

export const mongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN)
    console.log('Connect to Mongo DB')
  } catch (e) {
    console.error(e)
  }
}
