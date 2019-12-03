import { Schema, model } from "mongoose";

const LocationSchema = new Schema({
  loc_street1: {
    type: String,
    required: true
  },
  loc_street2: {
    type: String,
    required: false
  },
  loc_neighborhood: {
    type: String,
    required: true
  },
  loc_reference: {
    type: String,
    required: true
  }
});
const Location = model("location", LocationSchema);
export default Location;
