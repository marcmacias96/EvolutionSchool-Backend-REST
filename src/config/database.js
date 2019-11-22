import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose
      .connect("mongodb://localhost/Evo-Sch-Rest", { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("mongodb connected"));
  } catch (error) {
    console.error(error);
  }
}
