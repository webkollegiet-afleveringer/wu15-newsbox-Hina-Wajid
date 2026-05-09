import { useState, useEffect } from "react";

export default function useFetchData(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {

                const respons = await fetch(url)
                if (!respons.ok) {
                    setData(null)
                    throw new Error(`Error ${respons.status}`)
                }
                const json = await respons.json()
                setLoading(false)
                setData(json)
                setError(null)
            }
            catch (error) {
                setLoading(false)
                setError(error.message)
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error }
}