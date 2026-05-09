import { useState, useEffect } from "react";

export default function useFetchDataSteenCached(key, url) {

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
                if (key) {
                    sessionStorage.setItem(key, JSON.stringify(json));
                    sessionStorage.setItem(key + "_expires", Date.now() + 1000 * 15);
                }
                setLoading(false)
                setData(json)
                setError(null)
            }
            catch (error) {
                setLoading(false)
                setError(error.message)
            }
        }
        let cachedData = null;
        let cacheExpires = null;
        if (key) {
            cachedData = sessionStorage.getItem(key);
            cacheExpires = sessionStorage.getItem(key + "_expires")
        }

        // if cached data exsist do this part is true 
        // null === false
        if (cachedData && cacheExpires && Date.now() < parseInt(cacheExpires)) {
            console.log("det var fra chache");

            setData(JSON.parse(cachedData));
            setLoading(false);
            return;  /* return and do not do fetch */
        }
        fetchData();
    }, [key, url])

    return { data, loading, error }
}