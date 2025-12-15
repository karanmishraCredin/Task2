import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
    const [state, setState] = useState({
        table_data: [],
        error: false,
    });
    const [btntext,setbtntext]=useState("Add");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        dob: "",
        joiningDate: "",
        address: "",
        pincode: ""
    });
    return (
        <MainContext.Provider value={{btntext,setbtntext, state, setState, formData, setFormData, setError, error }}>
            {children}
        </MainContext.Provider>
    );
}

export function useMain() {
    return useContext(MainContext);
}