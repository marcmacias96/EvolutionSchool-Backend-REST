import { Schema, model } from "mongoose";

const SchoolSchema = new Schema({
  sch_name: {
    type: String,
    required: true
  },
  sch_location: {
    type: Schema.Types.ObjectId,
    required: true
  },
  sch_user: {
    type: Schema.Types.ObjectId,
    required: false
  },
  sch_routes: {
    type: Schema.Types.ObjectId,
    required: false
  }
});
const School = model("school", SchoolSchema);
export default School;
