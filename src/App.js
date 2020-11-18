import './index.css';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Zion</h1>
      </div>
    </Provider>
  );
}

export default App;
