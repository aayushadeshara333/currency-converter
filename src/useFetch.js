import { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null); //Previously we used it as [blogs, setBlogs]
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();
        console.log('fetched');

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data');
                    }
                    return res.json();
                })

                .then(dt => {
                    setData(dt);
                    setIsPending(false);
                    setError(null);
                })

                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    }

                    else {
                        console.log(err.message);
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1)

        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error }
}

export default useFetch;