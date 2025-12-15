import deleteEmployeeDB from "../Database/deleteEmployeeDB.js";

export default async function deleteEmployee(req, res) {
  try {
    const mobile = parseInt(req.body.mobile); 
    console.log("id->",mobile)
    const deleted = await deleteEmployeeDB(mobile);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }
    res.status(200).json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting employee", error });
  }
}
