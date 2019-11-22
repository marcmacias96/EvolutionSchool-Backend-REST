import { Schema, model } from 'mongoose'

const SolicitudeSchema = new Schema({
  sol_state: {
    type: String,
    required: true
  },
  sol_date: {
    type: String,
    required: true
  },
  sol_description: {
    type: String,
    required: true
  },
  sol_type: {
    type: String,
    required: true
  },
  sol_userSender: {
    type: Schema.Types.ObjectId,
    required: false
  },
  sol_userReceiver: {
    type: Schema.Types.ObjectId,
    required: false
  }
})
const Solicitude = model('solicitudes', SolicitudeSchema)
export default Solicitude
