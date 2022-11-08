import { AuthLoading } from "components/Helpers/AuthLoading";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { getUser, loginAuth } from "../services/request/remote";


export const ContextAuth = createContext(null)



export function ProviderAuth({ children }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()


    useEffect(() => {
        async function autoLoading() {
            const token = await window.localStorage.getItem("@dogs:token")
            if (token) {
                try {
                    setError(null)
                    setLoading(true)
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                    const { status, data } = await getUser()
                    
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

        return ()=> {
            setLoading(false)
        }
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

            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            const { data: dataUser, status: statusUser } = await getUser()
            
            

            setUser(dataUser)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }

        return ()=> {
            setLoading(false)
        }
    }

    async function userLogout() {
        delete api.defaults.headers.common['Authorization'];
        setUser(null)
        setError(null)
        setLoading(false)
        await window.localStorage.removeItem("@dogs:token")
        navigate('/login')
    }


    return <ContextAuth.Provider value={{user, loading, error, userLogin, userLogout }}>
        {loading ? (<AuthLoading>{ children }</AuthLoading>):children}
    </ContextAuth.Provider>
}
