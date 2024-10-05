import { useState } from "react";

export const useFetch = () => {

    const initialDataFetch = {
        data: null,
        isLoading: true,
        errors: null
    }


    const [state, setState] = useState(initialDataFetch);

    const { data, isLoading, error } = state

    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return
        try {

            const options = {
                method: method,
                headers: {
                    'Content-type': 'application/json, charset=UTF-8'
                },
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }

            const res = await fetch(url, options)
            const data = await res.json()
            setState({
                data,
                isLoading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                error: error
            })


        }

    }


    return {
        data,
        isLoading,
        error,
        fetchData
    }
}
