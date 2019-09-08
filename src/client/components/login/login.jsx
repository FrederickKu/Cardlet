import React from 'react';

import style from './style.scss';


class Login extends React.Component {

    render(){
         return (
            <div className={`col-3 ${style.cartContainer}` }>
                <h2>Cart</h2>
            </div>
         )
    }
}

export default Login;