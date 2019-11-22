import { Schema, model } from 'mongoose'

const RoleSchema = new Schema({
  rol_name: {
    type: String,
    required: true
  }
})
const Role = model('roles', RoleSchema)
export default Role
