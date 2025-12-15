import employee_model from "./model.js";
export default async function updateEmployeeDB(mobile, newData) {
    try {
        return await employee_model.findOneAndUpdate(
            { mobile: mobile },
            newData,
            { new: true }
        );
    } catch (error) {
        console.log(error)
    }

}
