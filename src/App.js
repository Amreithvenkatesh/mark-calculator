import './App.css';
import Home from './Home';
import Details from './Details'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Leaderpage from './Leaderpage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Home /> 
          </Route>
          <Route exact path="/details">
              <Details /> 
          </Route>
          <Route exact path="/leaderboard">
              <Leaderpage /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
