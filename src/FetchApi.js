import useFetch from './useFetch';
import Home from './Home';


const FetchApi = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = process.env.REACT_APP_URL;
    const { data, isPending, error } = useFetch(`${URL}/live?access_key=${API_KEY}&format=1`);
    let arr = []
    if (!isPending) {
        for (let e in data["quotes"]) {
            arr.push(e);
        }
    }
    return (
        <div>
            {isPending && <div className="home">Loading</div>}
            {!isPending && <Home arr={arr} data={data["quotes"]} error={error}/>}
        </div>
    );
}

export default FetchApi;