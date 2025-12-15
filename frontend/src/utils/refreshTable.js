import fetchapi from "../api/fetchapi";
export default async function refreshTable(state,setState) {
    const data = await fetchapi({ method: "GET", route: "/getAllemployee" });
    console.log("all employee->", data.data)
    setState((pre) => ({
        ...pre,
        table_data: data.data
    }));
} 