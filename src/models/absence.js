import { Schema, model } from 'mongoose'

const AbsenceSchema = new Schema({
  abs_date: {
    type: Date,
    required: true
  },
  abs_reason: {
    type: String,
    required: true
  }
})
const Absence = model('absences', AbsenceSchema)
export default Absence
