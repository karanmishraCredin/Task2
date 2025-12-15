import mongoose from "mongoose";
import employee_schema from "./schema.js";
const employee_model=mongoose.model("employee",employee_schema)
export default employee_model
 