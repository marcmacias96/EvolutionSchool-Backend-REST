import { Schema, model } from 'mongoose'

const CountrySchema = new Schema({
  cou_name: {
    type: String,
    required: true
  },
  cou_cities: {
    type: [Schema.Types.ObjectId],
    required: false
  }
})

const Country = model('countries', CountrySchema)
export default Country
