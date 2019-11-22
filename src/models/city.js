import { Schema, model } from 'mongoose'

const CitySchema = new Schema({
  cit_name: {
    type: String,
    required: true
  }

})
const City = model('cities', CitySchema)
export default City
