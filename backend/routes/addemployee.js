import express from "express";
import addemployeeDB from "../Database/addemployeeDB.js";
import checkemployee from "../Database/checkemployee.js";
const addemployee = express.Router();
export default addemployee.post('/', async (req, res) => {
    try {
 
        if (!req.body || await checkemployee(req.body.mobile)) {
            return res.send({
                status: "error",
                message: "Value is missing or employee already exists."
            });
        }

        const ans = await addemployeeDB(req.body);
        console.log("ans ->", ans);

        res.send({
            status: "ok",
            message: ans
        });

    } catch (err) {
        res.send({
            status: "error",
            message: "Error while inserting into DB: " + err
        });
    }
});
