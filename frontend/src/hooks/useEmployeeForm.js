import { useEffect, useState } from "react";
import { useMain } from "@/context/MainProvider";
import fetchapi from "../api/fetchapi";
import refreshTable from "../utils/RefreshTable";
import validation from "../utils/validation";
export default function useEmployeeForm() {
    const { state, setState, formData, setFormData, error, setError, btntext, setbtntext } = useMain()
    const [employees, setEmployees] = useState([]);
    const [count, setcount] = useState(0)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async () => {
        setError("");
        const mobileExists = employees.some(
            (emp) => emp.mobile === formData.mobile
        );
        if (mobileExists) {
            setError("Mobile number already exists!");
        }
        const newData = { ...formData };
        const res = validation(newData, state)
        if (res == true) {
            if (btntext == "Save") {
                console.log("try to save the update data ....")
                const data = await fetchapi({ method: "POST", body: { mobile: newData.mobile, newData: newData }, route: "/updateEmploye" });
                if (data?.status == "error") {
                    setError(res?.message)
                }
                setbtntext("Add")
            }
            else {
                setState((pre) => ({
                    ...pre,
                    table_data: [...pre.table_data, newData]
                }));
                let res = await fetchapi({ method: "POST", body: newData, route: "/addemployee" })
                if (res?.status == "error") {
                    setError(res?.message)
                }
            }
        }
        else {
            setError(res)
        }
        setFormData({
            name: "",
            mobile: "",
            dob: "",
            joiningDate: "",
            address: "",
            pincode: ""
        });
        refreshTable(state, setState)
    };
    useEffect(() => {
    }, [formData, setFormData, error])
    return { state, setState, employees, setEmployees, count, setcount, formData, setFormData, error, setError, handleChange, handleSubmit, btntext, setbtntext }
}