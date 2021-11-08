import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cards from './pages/cards';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ Cards } />
      </Switch>
    </Router>
  );
}

export default App;
