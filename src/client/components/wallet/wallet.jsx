import React from 'react';
// import PropTypes from 'prop-types';
import style from './style.scss';
import { Link } from "react-router-dom";

class Wallet extends React.Component {
    constructor() {
        super();
        this.state = {
            userWallet: [],
            isLoaded: false,
            error: '',
            display: []
        }

        this.deleteCard=this.deleteCard.bind(this);
        this.search=this.search.bind(this);
    }

    componentDidMount() {
        fetch("/getUserDetails")
        .then(response => response.json())
        .then((result) => {
            this.setState({userWallet: result.userWallet,  display: result.userWallet, isLoaded:true})
        },
        (error) =>{
            this.setState({error: error})
        })
    }

    deleteCard(event) {

        this.setState({isLoaded:false})

        let data={
            id:event.target.id
        }

        fetch("/wallet/deletecard", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then((result) => {
            this.setState({userWallet:result.userWallet, display:result.userWallet, isLoaded:true })
        },
        (error) =>{
                this.setState({error: error})
        })
    }

    search(event){
        let userWallet = this.state.userWallet;
        let searchWord = event.target.value;
        let searchResult = userWallet.filter ( (card) => (
            card.name.includes(searchWord) ||
            card.title.includes(searchWord) ||
            card.phone.includes(searchWord) ||
            card.mobile.includes(searchWord) ||
            card.email.includes(searchWord) ||
            card.website.includes(searchWord) ||
            card.address.includes(searchWord) ||
            card.company.includes(searchWord)
        ));

        this.setState({display:searchResult})
    }

    render(){
        if (this.state.isLoaded) {
            let allCards = this.state.display.map( (card,index) => {
                return (
                    <div className={`${style.individualCard}`} key={index}>
                        <div className = {`${style.cardImage}`} style={{backgroundImage:`url(${card.namecard_image})`}}></div>
                        <div className = {`${style.cardSummary}`}>
                            <p><span><i className={'bx bx-user-circle'}></i></span> {card.name}</p>
                            <p><span><i className={'bx bx-mobile'}></i></span> {card.mobile}</p>
                            <p><span><i className={'bx bxs-business'}></i></span> {card.company}</p>
                            <div>
                                <Link to={`/card/${card.namecard_id}`}><i className={'bx bxs-user-detail'}></i></Link>
                                <i className={'bx bx-trash'} id={card.namecard_id} onClick={this.deleteCard}></i>
                            </div>
                        </div>

                    </div>
                )
            })
            return (
                <React.Fragment>
                    <div className={`${style.walletContainer}`}>
                        <p> Business Card Wallet </p>
                        <form className={"form-inline"}>
                            <i className={'bx bx-search'}></i>
                            <input  type={"text"} placeholder={"Search"} aria-label={"Search"} onChange={this.search} />
                        </form>
                        <div className={`${style.cardContainer}`}>
                            {allCards}
                        </div>
                    </div>
                </React.Fragment>
            )
            } else {
                return (<div>Loading..</div>)
            }
    }
}

export default Wallet;