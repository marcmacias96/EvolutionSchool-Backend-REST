import { Schema, model } from 'mongoose'

const CarSchema = new Schema({
  car_licensePlate: {
    type: String,
    required: true
  },
  car_brand: {
    type: String,
    required: true
  },
  car_year: {
    type: Number,
    required: true
  },
  car_avatar: {
    type: String,
    required: false
  },
  car_driver: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

const Car = model('cars', CarSchema)
export default Car
