import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import style from './style.scss';

import Wallet from './components/wallet/wallet'
import Card from './components/card/card'


class App extends React.Component {

    render() {

    let navbarLink = null;

    if (cookies.get('meow') === undefined){
        navbarLink = React.createElement('a',{href:"/login"},`Login`);
    } else {
        navbarLink = React.createElement('a',{href:"/wallet/upload"},<i className={'bx bx-plus'}></i>);
    }


    return (
        <React.Fragment>
            <div className={`${style.navigation}`}>
                <div className={`${style.appDetailContainer}`}>
                    <img src={"https://res.cloudinary.com/dgv4tcunc/image/upload/v1567853175/C_yefdmo.png"} />
                    <p>ARDLET</p>
                </div>
                <div className={`${style.navigationTopContainer}`}>
                    {navbarLink}
                </div>
            </div>
            <div className={`${style.parentContainer}`}>
                <Switch>
                    <Route path="/wallet" render={props => (<Wallet {...props}/>)} />
                    <Route path="/card/:id" render={props => (<Card {...props} />)} />
                </Switch>
            </div>
            <div className={`${style.footer}`}>
                <div className={`${style.footerHome}`}>
                    <p><Link to="/"><i className={'bx bx-home'}></i></Link></p>
                </div>
                <div className={`${style.footerCard}`}>
                    <p><Link to="/wallet"><i className={'bx bx-id-card'}></i></Link></p>
                </div>
                <div className={`${style.footerPerson}`}>
                    <p><i className={'bx bx-user'}></i></p>
                </div>
            </div>
        </React.Fragment>
    );
    }
}

export default hot(module)(App);