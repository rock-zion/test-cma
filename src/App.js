import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/user/:login' component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;
