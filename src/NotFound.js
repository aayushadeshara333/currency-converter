import { Link } from "react-router-dom"
import {useHistory} from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();

    return (
        <div>
            <div className="home">
                <div className="container">
                    <p>Page Not Found</p>
                    <Link to='/'>
                        <p style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "20px"}}>Click here to go to the home page.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;