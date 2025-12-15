import express from 'express'
const getAllEmployee = express.Router();
import updateEmployeeDB from '../Database/updateemployeeDB.js';
export default getAllEmployee.post('/', (req, res) => {
    updateEmployeeDB(req.body.mobile,req.body.newData).then((ans) => {
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