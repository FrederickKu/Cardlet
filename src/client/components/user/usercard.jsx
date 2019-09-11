import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Link } from 'react-router-dom'

class UserCards extends React.Component {
    constructor() {
        super();
        this.state = {
            userCard: [],
            userDetails: {},
            isLoaded: false,
            defaultCard: {}
        }

        this.deleteCard=this.deleteCard.bind(this);
        this.changeDefault=this.changeDefault.bind(this);
    }

    componentDidMount() {
        fetch("/getUserDetails")
        .then(response => response.json())
        .then((result) => {
            let defaultCard = result.userCard.filter(card => card.default_card);
            this.setState({userCard: result.userCard, defaultCard:defaultCard[0], userDetails: result.userDetails, isLoaded:true})
        },
        (error) =>{
            console.log(error)
        })
    }

    deleteCard(){
        let data={
            id:event.target.id
        }

        fetch("/deleteusercard", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then((result) => {
            this.setState({userCard: result.userCard})
        },
        (error) =>{
                console.log(error)
        })
    }

    changeDefault(event){
        let data = {
            newDefault: event.target.id,
            oldDefault: this.state.defaultCard.namecard_id
        }

        fetch("/user/changedefault", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then((result) => {
            let defaultCard = result.userCard.filter(card => card.default_card);
            this.setState({userCard: result.userCard, defaultCard:defaultCard[0]});
        },
        (error) =>{
                console.log(error)
        })
    }

    render(){
        if (this.state.isLoaded) {
            let cards = this.state.userCard.map((card,index) => {
                if (card.namecard_image === "nil") {
                    return(
                        <div key={index} className={`${style.cardContainer}`}>
                            <div className={`${style.cardDesign}`}>
                                <div className={`${style.designTopRight}`}>
                                    <p className={`${style.cardName}`}>{card.name}</p>
                                    <p className={`${style.cardTitle}`}>{card.title}</p>
                                </div>
                                <div className={`${style.designBottomLeft}`}>
                                    <p><span className={`${style.label}`}>M: </span><span>{card.mobile}</span></p>
                                    <p><span className={`${style.label}`}>E: </span><span>{card.email}</span></p>
                                    <p><span className={`${style.label}`}>C: </span><span>{card.company}</span></p>
                                    <p><span className={`${style.label}`}>W: </span><span>{card.website}</span></p>
                                </div>
                                <div className={`${style.cardbar}`}>
                                </div>
                            </div>
                            <div className={`${style.cardButtons}`}>
                                <Link to={`/card/${card.namecard_id}`}><i className={'bx bxs-user-detail'}></i></Link>
                                <a><i className={'bx bx-trash'} id={card.namecard_id} onClick={this.deleteCard}></i></a>
                                {card.default_card ? <a><i className={'bx bxs-star'} ></i></a> : <a><i className={'bx bx-star'} id={card.namecard_id} onClick = {this.changeDefault} ></i></a>}
                            </div>
                        </div>
                    )
                } else{
                    return(
                        <div key={index} className={`${style.cardContainer}`}>
                            <div className={`${style.defaultCard}`} style={{backgroundImage: `url(${card.namecard_image})`}}>
                            </div>
                            <div className={`${style.cardButtons}`}>
                                <Link to={`/card/${card.namecard_id}`}><i className={'bx bxs-user-detail'}></i></Link>
                                <a><i className={'bx bx-trash'} id={card.namecard_id} onClick={this.deleteCard}></i></a>
                                {card.default_card ? <a><i className={'bx bxs-star'} ></i></a> : <a><i className={'bx bx-star'} id={card.namecard_id} onClick = {this.changeDefault} ></i></a>}
                            </div>
                        </div>
                    )
                }
            })

            return(
                <React.Fragment>
                    <div className={`${style.profileContainer}`}>
                        <img src={this.state.userDetails.user_photo} />
                        <div  className={`${style.userInformation}`}>
                            <p>{this.state.userDetails.user_name}</p>
                            <a href={'user/addcard'}><button className="btn"> Add NameCard</button></a>
                        </div>
                    </div>
                    <div className={`${style.cardParentContainer}`}>
                        {cards}
                    </div>
                </React.Fragment>
            )
        } else {
            return(
                <div> Loading </div>
            )
        }

    }
}

export default UserCards;