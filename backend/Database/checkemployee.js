import employee_model from "./model.js";
export default async function checkemployee(mobile) {
     const employee = await employee_model.findOne({ mobile: mobile });
     console.log("check employee-> ",employee)
     return employee;
}