import React from 'react';
import style from './style.scss';

class Home extends React.Component {

    render(){
        return(
            <React.Fragment>
                <div className={`${style.homeBackground}`}>
                </div>
                <div className={`${style.homeContainer}`}>
                    <img className={`${style.homeImage}`} src="https://res.cloudinary.com/dgv4tcunc/image/upload/v1567757922/Cardnect_fqub79.png" />
                    <p>Card Wallet<br /> Made Simple</p>
                    <a href={"/signup"}><button className={`btn ${style.registerbtn}`}>Join Us Now!</button></a>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;