import api from "../services/api";
import { useState, useEffect } from "react";

const useAxiosFunction = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); //different!
    const [controller, setController] = useState();

    const axiosFetch = async (configObj) => {
        const {
            method,
            url,
            requestConfig = {}
        } = configObj;

        try {
            setLoading(true);
            setError('');
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await api[method.toLowerCase()](url, {
                ...requestConfig,
                signal: ctrl.signal
            });
            setResponse(res.data);
        } catch (err) {
            if (err?.response?.data?.message) {
                setError(err.response.data.message);
            }
            else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log(controller)

        // useEffect cleanup function
        return () => controller && controller.abort();

    }, [controller]);

    return [response, error, loading, axiosFetch];
}

export default useAxiosFunction