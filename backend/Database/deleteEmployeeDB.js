import Employee from "./model.js";
export default async function deleteEmployeeDB(mobile) {
  try {
    const deleted = await Employee.findOneAndDelete({ mobile: mobile });
    return deleted;
  } catch (error) {
    console.log(error)
  }

}
