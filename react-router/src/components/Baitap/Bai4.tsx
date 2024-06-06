import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <div>Trang chủ</div>;
const Contact = () => <div>Liên hệ</div>;
const Login = () => <div>Đăng nhập</div>;
const Register = () => <div>Đăng ký</div>;

const App = () => (
    <Router>
        <nav>
            <ul>
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/contact">Liên hệ</Link></li>
                <li><Link to="/login">Đăng nhập</Link></li>
                <li><Link to="/register">Đăng ký</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
        </Switch>
    </Router>
);
export default App;