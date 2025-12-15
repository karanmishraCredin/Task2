import mongoose from "mongoose";
const employee_schema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    dob: { type: String, required: true },
    joiningDate: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true }
});
export default employee_schema