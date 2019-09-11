import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import style from './style.scss';

import Wallet from './components/wallet/wallet';
import Card from './components/card/card';
import Index from './components/index/index';
import Home from './components/index/home';
import UserModal from './components/user/modal';
import User from './components/user/usercard';


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
                <Link to='/'>
                    <img src={"https://res.cloudinary.com/dgv4tcunc/image/upload/v1567853175/C_yefdmo.png"} />
                    <p>ARDLET</p>
                </Link>
                </div>
                <div className={`${style.navigationTopContainer}`}>
                    {navbarLink}
                </div>
            </div>
            <div className={`${style.parentContainer}`}>
                <Switch>
                    <Route path="/" exact render={props => ((cookies.get('meow') === undefined)? <Home {...props} /> : <Index {...props}/>)} />
                    <Route path="/wallet" render={props => (<Wallet {...props}/>)} />
                    <Route path="/card/:id" render={props => (<Card {...props} />)} />
                    <Route path="/user" render={props => (<User {...props} />)} />
                </Switch>
            </div>
            <div className={`${style.footer}`}>
                { (cookies.get('meow') === undefined) ?
                    (<p> A smarter way to store Business Cards</p>)
                    :
                    (<React.Fragment>
                        <div className={`${style.footerHome}`}>
                            <p><Link to="/"><i className={'bx bx-home'}></i></Link></p>
                        </div>
                        <div className={`${style.footerCard}`}>
                            <p><Link to="/wallet"><i className={'bx bx-id-card'}></i></Link></p>
                        </div>
                        <div className={`${style.footerPerson}`}>
                            <p><a><i className={'bx bx-user'} data-toggle={"modal"} data-target={"#userModal"} ></i></a></p>
                        </div>
                    </React.Fragment>)
                }
            </div>
            { (cookies.get('meow') !== undefined) ? <UserModal /> : null }
        </React.Fragment>
    );
    }
}

export default hot(module)(App);