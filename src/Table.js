import { useState } from 'react';
import useFetch from './useFetch';


const Table = () => {
    console.warn = () => {};
    console.error = () => {};
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = process.env.REACT_APP_URL;
    const { data, isPending, error } = useFetch(`${URL}/live?access_key=${API_KEY}&format=1`);
    console.clear();
    let isNull = false;
    let hasError = false;

    if (data === null) {
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

    const [selected, setSelected] = useState("USDINR");
    return (
        <div>
            {isPending && <div className="home">Loading</div>}
            {(isNull || hasError) && <div className="home">Unable to fetch data</div>}
            {!isPending && !isNull && !hasError && <div className="table_content">
                <h1 style={{ color: "rgba(255, 255, 255, 0.8)" }}>Currency Table</h1>
                <table>
                    <tr>
                        <th colSpan='2'>
                            <select value={selected.slice(3, 6)} onChange={(e) => setSelected("USD" + e.target.value)}>
                                {arr.map((ele) => { return <option>{ele.slice(3, 6)}</option> })}
                            </select>
                        </th>
                    </tr>
                    {arr.map((e) => { return <tr><td>{e.slice(3, 6)}</td><td>{(data.quotes[e] / data.quotes[selected]).toFixed(7)}</td></tr> })}
                </table>
            </div>}
        </div>
    );
}

export default Table;