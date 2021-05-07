import useFetch from './useFetch';
import Home from './Home';
import { useState } from 'react';


const FetchApi = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = process.env.REACT_APP_URL;
    let flag = false;
    const { data, isPending, error } = useFetch(`${URL}/`);

    if(data === null){
        flag = true;
        document.getElementsByTagName("title").innerHTML = "Hello";
    }

    let arr = []
    if (!isPending && flag === false) {
        for (let e in data["quotes"]) {
            arr.push(e);
        }
    }
    return (
        <div>
            {flag && <div className="home">Unable to fetch data</div>}
            {isPending && <div className="home">Loading</div>}
            {!isPending && flag === false && <Home arr={arr} data={data["quotes"]} error={error}/>}
        </div>
    );
}

export default FetchApi;