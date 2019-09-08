import React from 'react';
import { hot } from 'react-hot-loader';
import Cookies from 'universal-cookie';


import Login from './components/login/login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import style from './style.scss';


class App extends React.Component {

    render() {
    return (
        <Router>
            <div className={`${style.mainLogin}`}>
                <div className={`${style.overallNav}`}>
                    <div className={`${style.navText}`}>
                        <span>
                            CARDLET
                        </span>
                    </div>
                    <div className={`${style.navLinks}`}>
                        <a href="/login">Login</a>
                    </div>
                </div>
                <div className={`${style.homeDisplay}`}>
                    <div className={`${style.homeImage}`}>
                        <img src="https://res.cloudinary.com/dgv4tcunc/image/upload/v1567757922/Cardnect_fqub79.png" />
                    </div>
                    <div className={`${style.homeText}`}>
                        <p>A Wallet for Namecards</p>
                    </div>
                </div>
            </div>
        </Router>
    );
    }
}

export default hot(module)(App);