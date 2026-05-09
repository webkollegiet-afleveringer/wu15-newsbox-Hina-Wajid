import { useEffect, useState } from "react";

export default function useCachedFetch(key, url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function doFetch(url, options) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error("Error " + response.status);
            }
            let result = null;
            if (response.headers.get("content-type").includes("application/json")) {
                result = await response.json();
            } else if (response.headers.get("content-type").includes("text/plain")) {
                result = await response.text();
            }
            setData(result);
            if (key) {
                sessionStorage.setItem(key, JSON.stringify(result));
                sessionStorage.setItem(key + "_expires", Date.now() + 1000 * 60 + 1);
            }

        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(function () {

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
        // if above is not true do below 
        doFetch(url, options);
    }, [url, key]);

    return { data, loading, error };
}
/* send a key through useCachedFetch , check if key exsist ,create a session storage variable under that key name and add json to it ,
Create another session storage for caching time duration as in timer f.ex current time plus 5 minutes ,
check if cached data exsist and timer is true 
 */