import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, loginAuth } from "../services/request/remote";


export const ContextAuth = createContext(null)



export function ProviderAuth({ children }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {
        async function autoLoading() {
            const token = await window.localStorage.getItem("@dogs:token")
            if (token) {
                try {
                    setError(null)
                    setLoading(true)
                    const { status, data } = await getUser(token)
                    
                    if (status !== 200) {
                        throw new Error('Token invalido')
                    }

                    setUser(data)
                } catch (error) {
                    await userLogout()
                } finally {
                    setLoading(false)
                }
            }
        }

        autoLoading()
    }, [])



    async function userLogin({ username, password }) {
        try {
            setError(null)
            setLoading(true)
            const {status, statusText , data} = await loginAuth({
                username,
                password
            })

            if (status !== 200) {
                throw new Error(`Error: Usuário Inválido`)
            }
    
            await window.localStorage.setItem("@dogs:token", data.token)

            const { data:dataUser, status: statusUser } = await getUser(data.token)
            setUser(dataUser)


            
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }

        
    }

    async function userLogout() {
        setUser(null)
        setError(null)
        setLoading(false)
        await window.localStorage.removeItem("@dogs:token")
        navigate('/login')
    }


    return <ContextAuth.Provider value={{user, loading, error, userLogin, userLogout }}>
        {children}
    </ContextAuth.Provider>
}
