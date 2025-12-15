import fetchapi from "../api/fetchapi";
export default async function refreshTable(state, setState) {
    const data = await fetchapi({ method: "GET", route: "/getAllemployee" });
    if (data?.status == "error") {
        setError(res?.message)
    }
    console.log("all employee->", data.data)
    setState((pre) => ({
        ...pre,
        table_data: data.data
    }));
    const sortedData = [...state.table_data].sort(
        (a, b) => new Date(b.joiningDate) - new Date(a.joiningDate)
    );
    // console.log("sorted date=> ", sortedData)
    setState((pre) => ({
        ...pre,
        table_data: sortedData
    }));
} 