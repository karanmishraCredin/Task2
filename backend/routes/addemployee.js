import express from "express";
import addemployeeDB from "../Database/addemployeeDB.js";
import checkemployee from "../Database/checkemployee.js";
const addemployee = express.Router();
export default addemployee.post('/', async (req, res) => {
    try {
 
        if (!req.body || await checkemployee(req.body.mobile)) {
            return res.status(400).json({
                status: "error",
                message: "Value is missing or employee already exists."
            });
        }

        const ans = await addemployeeDB(req.body);
        console.log("ans ->", ans);

        res.status(200).json({
            status: "ok",
            message: ans
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Error while inserting into DB: " + err
        });
    }
});
