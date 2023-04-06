import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            axios
                .get("http://localhost:4000/users/verifytoken", {
                    headers: { token: localStorage.getItem("token") },
                })
                .then((res) => {
                    if (res.data.success) {
                        setUser(res.data.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <MyContext.Provider value={{ user, setUser }}>
            {children}
        </MyContext.Provider>
    );
};
export default Context;
