import employee_model from "./model.js";
export default async function addemployeeDB(data) {
    try {
        const last = await employee_model.findOne().sort({ id: -1 });
        const newId = last ? last.id + 1 : 1;
        const newemployee = new employee_model({ ...data, id: newId });
        return await newemployee.save();
    }
    catch (error) {
       console.log(error)
    }

}