export default function validation(data, state) {
    console.log("state in error => ", state)
    console.log("data in error => ", data)

    let find = state.table_data.filter((val) => val.mobile == data.mobile)
    // if (find?.length > 0) {
    //     return "Mobile number already exists!"
    // }
    if (data.mobile.split('').length > 10 || data.mobile.split('').length < 10) {
        return "Mobile number must have 10 digits!"
    }
    if (!(/[^0-9]/.test(data))) {
        return "Mobile number must have contain digits! "
    }
    let d1 = new Date(data.dob);
    let d2 = new Date(data.joiningDate);
    if (d1 > d2) {
        return "Joining Date is worng";
    } else if (JSON.stringify(d1) == JSON.stringify(d2)) {
        return "Date of Birth and Joining Date are same";
    }
    if ((/\d/.test(data.name))) {
        return "Name must have only characters !"
    }
    if (data.pincode.split('').length > 6 || data.pincode.split('').length < 6) {
        return "Pincode number must have 6 digits!"
    }
    if (data?.name?.length == 0 || data?.address?.length == 0 || data?.dob?.length == 0 || data?.joiningDate?.length == 0 ||
        data?.mobile?.length == 0 ||
        data?.pincode?.length == 0
    ) {
        return "Invalid inputs !"
    }
    return true
}