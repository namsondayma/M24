import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Home component
const Home: React.FC = () => {
    return (
        <div>
            <h1>Đây là trang chủ</h1>
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
                    </ul>
                </nav>
                <Route path="/">
                    <Home />
                </Route>
            </div>
        </Router>
    );
};

export default App;