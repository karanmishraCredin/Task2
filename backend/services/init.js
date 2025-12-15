import connectdb from "../Database/connectDB.js";
export default async function init() {
    await connectdb();
}