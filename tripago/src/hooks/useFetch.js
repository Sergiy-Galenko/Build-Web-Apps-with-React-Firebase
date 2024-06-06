import { useEffect, useRef, useState } from "react";

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [isPending, setItPending] = useState(false);
    const [error, setError] = useState(null);

    const options = useRef(_options).current;

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setItPending(true);
            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const json = await res.json();

                setItPending(false);
                setData(json);
                setError(null);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("the fatch was aborted");
                } else {
                    setItPending(false);
                    setError("Could not fetch the data");
                }
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, [url, options]);

    return { data, isPending, error };
};
