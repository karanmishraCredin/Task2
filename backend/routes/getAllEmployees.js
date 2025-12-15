import express from "express"
import getAllEmployeesDB from "../Database/getAllEmployeesDB.js";
const getAllEmployee = express.Router();
export default getAllEmployee.get('/', (req, res) => {
    getAllEmployeesDB().then((ans) => {
        res.status(200).json({
            status: "ok",
            data: ans
        })
    }).catch((err) => {
        res.status(500).json({
            status: "error",
            message: "error while insert into DB " + err
        })
    })
})