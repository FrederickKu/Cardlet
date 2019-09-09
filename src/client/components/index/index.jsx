import React from 'react';
import style from './style.scss';
var moment = require('moment');


class Index extends React.Component {

        constructor() {
            super();
            this.state = {
                userCard: [],
                userDetail: {},
                userWallet: [],
                isLoaded: false
            }
        }

        componentDidMount() {
            fetch("/getUserDetails")
            .then(response => response.json())
            .then((result) => {
                this.setState({userWallet: result.userWallet, userDetail:result.userDetails, userCard:result.userCard, isLoaded:true})
            },
            (error) =>{
                console.log(error)
            })
        }

        getDefault() {
            let defaultCard=this.state.userCard.filter(card=>card.default_card)[0];

            if (defaultCard.namecard_image === 'nil'){
                return (
                    <div className={`${style.cardDesign}`}>
                        <div className={`${style.designTopRight}`}>
                            <p className={`${style.cardName}`}>{defaultCard.name}</p>
                            <p className={`${style.cardTitle}`}>{defaultCard.title}</p>
                        </div>
                        <div className={`${style.designBottomLeft}`}>
                            <p><span className={`${style.label}`}>M: </span><span>{defaultCard.mobile}</span></p>
                            <p><span className={`${style.label}`}>E: </span><span>{defaultCard.email}</span></p>
                            <p><span className={`${style.label}`}>C: </span><span>{defaultCard.company}</span></p>
                            <p><span className={`${style.label}`}>W: </span><span>{defaultCard.website}</span></p>
                        </div>
                        <div className={`${style.cardbar}`}>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className={`${style.defaultCard}`} style={{backgroundImage: `url(${defaultCard.namecard_image})`}}>
                    </div>
                )
            }
        }

        getStats() {
            let walletTotal = this.state.userWallet.length;
            let currentMonthTotal = this.state.userWallet.filter(card=>(
                moment(card.linked_date).month() === moment().month() && moment(card.linked_date).year() === moment().year()
            )).length;

            return(
                <React.Fragment>
                    <div className={`${style.walletTotal}`}>
                        <p className={`${style.bigNumber}`}>{walletTotal}</p>
                        <p className={`${style.smallText}`}>Business cards <br /> in Cardlet</p>
                    </div>
                    <div className={`${style.monthTotal}`}>
                        <p className={`${style.bigNumber}`}>{currentMonthTotal}</p>
                        <p className={`${style.smallText}`}>New Business Cards<br /> this month</p>
                    </div>
                </React.Fragment>
            )

        }

        recentlyAdded() {
            let cards = [];
            if (this.state.userWallet.length >5){
                cards = this.state.userWallet.slice(0,5);
            } else {
                cards = this.state.userWallet;
            }

            let recentlyAdded = cards.map( (card,index) => {
                return (
                    <div className={`${style.individualCard}`} key={index}>
                        <div className = {`${style.cardImage}`} style={{backgroundImage:`url(${card.namecard_image})`}}></div>
                        <div className = {`${style.cardSummary}`}>
                            <p><span><i className={'bx bx-user-circle'}></i></span> {card.name}</p>
                            <p><span><i className={'bx bx-mobile'}></i></span> {card.mobile}</p>
                            <p><span><i className={'bx bxs-business'}></i></span> {card.company}</p>
                        </div>
                    </div>
                )
            })

            return recentlyAdded;
        }

      render(){

        if (this.state.isLoaded) {
                let userDefaultCard = this.getDefault();
                let userStats = this.getStats();
                let recentlyAdded = this.recentlyAdded();
            return (
                <React.Fragment>
                    <p className={`${style.indexTitle}`}>Welcome to CardLet, {this.state.userDetail.user_name}!</p>
                    <div className={`${style.indexCardContainer}`}>
                        {userDefaultCard}
                    </div>
                    <p className={`${style.indexTitle}`}>Information</p>
                    <div className={`${style.indexStatsContainer}`}>
                        {userStats}
                    </div>
                    <p className={`${style.subInfoTitle}`}>Recent 5</p>
                    <div className={`${style.recentlyAddedContainer}`}>
                        {recentlyAdded}
                    </div>
                </React.Fragment>

            )
        } else {
            console.log('display else');
            return (
                <div>Loading page</div>
            )
        }
    }
}

export default Index;