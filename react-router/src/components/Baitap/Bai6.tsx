import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homes from './Homes';
import Contacts from './Contacts';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>   
        </ul>
      </nav>

      <Switch>
        <Route path="/contact"><Contacts /></Route>
        <Route path="/"><Homes /></Route>
      </Switch>
    </Router>
  );
};

export default App;