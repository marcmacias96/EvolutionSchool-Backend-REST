import { Schema, model } from "mongoose";

const RouteSchema = new Schema({
  rou_zone: {
    type: String,
    required: true
  },
  rou_school: {
    type: Schema.Types.ObjectId,
    required: false
  },
  rou_driver: {
    type: Schema.Types.ObjectId,
    required: false
  },
  rou_students: {
    type: [Schema.Types.ObjectId],
    required: false
  }
});
const Route = model("route", RouteSchema);
export default Route;
