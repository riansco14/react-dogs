import { createContext, useEffect, useState } from "react";
import { getUser, loginAuth } from "../services/request/remote";


export const ContextAuth = createContext(null)



export function ProviderAuth({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetch() {
            const token = window.localStorage.getItem("@dogs:token")
            if (token) {
                const data = await getUser(token)
                setUser(data)
            }
        }

        fetch()
    }, [])



    async function login({ username, password }) {
        const data = await loginAuth({
            username,
            password
        })

        if (data.token) {
            window.localStorage.setItem("@dogs:token", data.token)
            const dataUser = await getUser(data.token)
            setUser(dataUser)
        }
    }

    function logout() {
        window.localStorage.setItem("@dogs:token", '')
    }


    return <ContextAuth.Provider value={{user, login, logout }}>
        {children}
    </ContextAuth.Provider>
}
