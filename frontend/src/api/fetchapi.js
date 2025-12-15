
export default async function fetchapi(params) {
    let option = {
        method: params.method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params?.body)
    }
    let data = await fetch(import.meta.env.VITE_BACKEND_HOST + params.route, option);
    let res = await data.json(data);

    return res
}