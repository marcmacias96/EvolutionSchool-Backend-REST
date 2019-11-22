import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CarSChema = new Schema({
  name: String
})

const Car = mongoose.model('autos', CarSChema)

export default Car
