import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  usr_names: {
    type: String,
    required: true
  },
  usr_lastNames: {
    type: String,
    required: true
  },
  usr_phoneNumber: {
    type: Number,
    required: false
  },
  usr_avatar: {
    type: String,
    required: false
  },
  usr_personalID: {
    type: Number,
    required: true
  },
  usr_user: {
    type: String,
    required: true
  },
  usr_email: {
    type: String,
    required: true
  },
  usr_password: {
    type: String,
    required: true
  },
  usr_students: [
    {
      type: Schema.Types.ObjectId,
      ref: "student"
    }
  ],
  usr_roles: {
    type: [Schema.Types.ObjectId],
    required: false
  },
  usr_city: {
    type: Schema.Types.ObjectId,
    required: false
  },
  usr_solicitudes: {
    type: [Schema.Types.ObjectId],
    required: false
  }
});

const User = model("user", UserSchema);
export default User;
