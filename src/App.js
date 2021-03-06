import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/SignIn' component={SignIn} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
