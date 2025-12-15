import Employee from "./model.js";
export default async function getAllEmployeesDB() {
  try {
    return await Employee.find().sort({ _id: -1 });
  } catch (error) {
    console.log("error =>",error)
  }
}
