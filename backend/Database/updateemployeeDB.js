import employee_model from "./model.js";

export default async function updateEmployeeDB(mobile, newData) {
    try {
        const finduser = await employee_model.findOne({ mobile });
        if (!finduser) return null;
        const updateFields = {};
        for (const key in newData) {
            if (["_id", "__v", "id"].includes(key)) continue;
            if (newData[key] === undefined || newData[key] === null) continue;
            if (String(newData[key]) !== String(finduser[key])) {
                updateFields[key] = newData[key];
            }
        }
        if (Object.keys(updateFields).length === 0) {
            console.log("No changes detected");
            return finduser;
        }
        console.log("Updating only:", updateFields);
        return await employee_model.findOneAndUpdate(
            { mobile },
            { $set: updateFields },
            { new: true }
        );

    } catch (error) {
        console.error(error);
        throw error;
    }
}
