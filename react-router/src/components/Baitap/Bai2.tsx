import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Đây là trang chủ</h1>
    </div>
  );
};
const Contact: React.FC = () => {
  return (
    <div>
      <h1>Đây là trang liên hệ</h1>
    </div>
  );
};
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </div>
    </Router>
  );
};

export default App;