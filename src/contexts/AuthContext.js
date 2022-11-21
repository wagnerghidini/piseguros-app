import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    //const [auth, setAuth] = useState({});
    const [auth, setAuth] = useState({user: "wagner", token: "a", role:"b", expires: "2022-11-21"});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;