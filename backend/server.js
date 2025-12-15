import express from "express"
const app = express()
import cors from "cors";
import init from "./services/init.js";
import addemployee from "./routes/addemployee.js";
import getAllEmployees from "./routes/getAllEmployees.js";
import  deleteEmployee  from "./routes/deleteEmployee.js";
import updateEmploye from "./routes/updateEmploye.js";
const port = process.env.PORT || 80

init()
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/addemployee', addemployee)
app.use('/getAllemployee', getAllEmployees)
app.use('/deleteEmploye', deleteEmployee)
app.use('/updateEmploye', updateEmploye)
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})