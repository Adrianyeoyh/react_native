import { useEffect, useState } from "react"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data,setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => { // defining the function fetchdata in local scope
        try {
            setLoading(true);
            setError(null) ;

            const result = await fetchFunction();

            setData(result);
        }
        catch(err) {
            // @ts-ignore
            setError(err instanceof Error ? err : new Error('An Error occurred '));
        }
        finally{
            setLoading(false);
        }
    }

    const reset = ()=>{
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => { //basically what it means, if autofetch is on then just use fetchdata function that was defined earlier
            if (autoFetch) {
                fetchData();
            }
        }, []);
    
    return { data, loading, error, refetch:fetchData, reset};
    
}

export default useFetch;