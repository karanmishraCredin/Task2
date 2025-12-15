import { useMain } from "@/context/MainProvider";
import { useEffect } from "react";
import fetchapi from "../api/fetchapi";
import refreshTable from "../utils/RefreshTable";
export default function useEmployeeTable() {
    const { state, setState, setFormData, btntext, setbtntext } = useMain()
    useEffect(() => {
        (async () => {
            const data = await fetchapi({ method: "GET", route: "/getAllemployee" });
            setState((pre) => ({
                ...pre,
                table_data: [...pre.table_data].concat(data.data)
            }));
        })();
    }, [])
    async function onDelete(emp, index) {
        let res = await fetchapi({ method: "POST", body: { mobile: emp.mobile }, route: "/deleteEmploye" });
        if (res?.status == "error") {
            setError(res?.message)
        }
        await refreshTable(state, setState)
    }
    async function onEdit(emp, index) {
        setbtntext("Save")
        setFormData(emp);
        // console.log("new update data=> ",emp)
        // const data = await fetchapi({ method: "POST", body: { mobile: emp.mobile, newData: null }, route: "/updateEmploye" });
        await refreshTable(state, setState)
    }
    return { state, setState, onDelete, onEdit, btntext, setbtntext }
}