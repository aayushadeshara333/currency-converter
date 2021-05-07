import useFetch from './useFetch';
import Home from './Home';
import { useState } from 'react';


const FetchApi = () => {
    console.warn = () => {};
    console.error = () => {};
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = process.env.REACT_APP_URL;
    let isNull = false;
    let hasError = false;
    const { data, isPending, error } = useFetch(`${URL}/live?access_key=${API_KEY}&format=1`);

    if(data === null){
        isNull = true;
    }
    else if(data.success === false){
        hasError = true;
    }

    let arr = []
    if (!isPending && isNull === false && hasError === false) {
        for (let e in data["quotes"]) {
            arr.push(e);
        }
    }
    return (
        <div>
            {isPending && <div className="home">Loading</div>}
            {(isNull || hasError) && <div className="home">Unable to fetch data</div>}
            {!hasError && !isNull && !isPending && <Home arr={arr} data={data["quotes"]} error={error}/>}
        </div>
    );
}

export default FetchApi;