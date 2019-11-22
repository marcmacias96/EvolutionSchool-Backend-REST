import { Schema, model } from 'mongoose'

const ReliefSchema = new Schema({
  rel_date: {
    type: Date,
    required: true
  },
  rel_description: {
    type: String,
    required: true
  },
  rel_driver: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

const Relief = model('reliefs', ReliefSchema)

export default Relief
