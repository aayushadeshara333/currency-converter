import Table from './Table';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchApi from './FetchApi';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = '/'>
              <div>
                {<FetchApi />}
              </div>
            </Route>
            <Route exact path = '/table'>
              <Table />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
