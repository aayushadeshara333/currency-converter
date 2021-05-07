import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Home = (props) => {
    const arr = props.arr;
    const data = props.data;
    const error = props.error;
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [answer, setAnswer] = useState(0);
    const [ready, setReady] = useState(false);
    const [one, setOne] = useState(0);

    
    const HandleSubmit = (e) => {
        e.preventDefault();

        const from_country = "USD" + from;
        const to_country = "USD" + to;
        setOne(data[to_country] / data[from_country]);

        const temp = amount * (data[to_country] / data[from_country]);
        if (amount === 0) {
            setAnswer(0);
            setReady(true);
        }
        else {
            setAnswer(temp);
            setReady(true);
        }
    }

    return (
        <div>
            <div className="home">
                <div className="container">
                    <div className="heading">Currency Converter</div>
                    <div className="main_content">
                        <div className="from_section">
                            <div className="from">From</div>
                            <div className="from_main">
                                <div className="from_input">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => {
                                            setAmount(e.target.value);
                                            setReady(false);
                                        }}

                                    />
                                </div>
                                <div className="from_select">
                                    <select
                                        value={from}
                                        onChange={(e) => {
                                            setFrom(e.target.value);
                                            setReady(false);
                                        }}>
                                        {arr.map((ele) => { return <option>{ele.slice(3, 6)}</option> })}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="swap_button">
                            <FontAwesomeIcon icon={faExchangeAlt} onClick={(e) => {
                                e.preventDefault();
                                setTo(from);
                                setFrom(to);
                                setReady(false);
                            }} />
                        </div>

                        <div className="to_section">
                            <div className="to">To</div>
                            <div className="to_main">
                                <div className="to_input">{/*Select*/}
                                    <select
                                        value={to}
                                        onChange={(e) => {
                                            setTo(e.target.value);
                                            setReady(false);
                                        }}>
                                        {arr.map((e) => { return <option>{e.slice(3, 6)}</option> })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_answer" onClick={HandleSubmit}>
                        Show Answer
                </div>
                    <div className="answer">
                        {ready && answer.toFixed(7)}
                    </div>
                    <div className="answer_sub">
                        {ready && <div>1 {from} is <b>{one}</b> {to}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;