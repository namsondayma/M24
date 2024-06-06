import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Đây là trang chủ</h1>
        </div>
    );
};

const Contact: React.FC = () => 
  return (
    <div>
        <h1>Đây là trang liên hệ</h1>
    </div>
);

    const Login: React.FC = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        const handleLogin = () => {
            if (username === 'admin' && password === 'password') {
                setIsLoggedIn(true);
            }
        };

        if (isLoggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h1>Đây là trang đăng nhập</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
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
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    };

    export default App;