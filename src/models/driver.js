import { Schema, model } from 'mongoose'

const DriverSchema = new Schema({
  dri_license: {
    type: String,
    required: true
  },
  dri_user: {
    type: Schema.Types.ObjectId,
    required: false
  },
  dri_cars: {
    type: [Schema.Types.ObjectId],
    required: false
  },
  dri_reliefs: {
    type: [Schema.Types.ObjectId],
    required: false
  },
  dri_routes: {
    type: [Schema.Types.ObjectId],
    required: false
  }
})
const Driver = model('drivers', DriverSchema)
export default Driver
