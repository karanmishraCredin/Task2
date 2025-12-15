import express from 'express'
const updateEmploye = express.Router();
import updateEmployeeDB from '../Database/updateemployeeDB.js';
export default updateEmploye.post('/', (req, res) => {
    if (!req.body || !req?.body?.mobile || !req?.body?.newData) {
        return res.status(400).json({
            status: "error",
            message: "Value is missing  !"
        });
    }
    updateEmployeeDB(req.body.mobile, req.body.newData).then((ans) => {
        res.status(200).json({
            status: "ok",
            data: ans
        })
    }).catch((err) => {
        res.status.json(500)({
            status: "error",
            message: "error while insert into DB " + err
        })
    })
})