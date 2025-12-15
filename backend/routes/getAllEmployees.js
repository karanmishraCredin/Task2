import express from "express"
import getAllEmployeesDB from "../Database/getAllEmployeesDB.js";
const getAllEmployee = express.Router();
export default getAllEmployee.get('/', (req, res) => {
    getAllEmployeesDB().then((ans) => {
        res.send({
            status: "ok",
            data: ans
        })
    }).catch((err) => {
        res.send({
            status: "error",
            message: "error while insert into DB " + err
        })
    })
})