import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Display from './display';
import { Redirect } from "react-router-dom";



class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            enableEdit:false,
            userWallet: [],
            isLoaded: false,
            deleteCard: false
        }

        this.deleteCard=this.deleteCard.bind(this);
    }

    componentDidMount() {
        fetch("/getUserDetails")
        .then(response => response.json())
        .then((result) => {
            this.setState({userWallet: result.userWallet, isLoaded: true})
        },
        (error) =>{
            console.log(error)
        })
    }

    deleteCard(event) {

        this.setState({isLoaded: false})

        let data={
            id:event.target.id
        }

        console.log(data);

        fetch("/wallet/deletecard", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then((result) => {
            this.setState({userWallet: result.userWallet, isLoaded:true, deleteCard: true})
        },
        (error) =>{
                console.log(error)
        })
    }

    render(){
        const cardID = parseInt(this.props.match.params.id);

        const card = this.state.userWallet.filter(card => card.namecard_id === cardID);

        if (this.state.isLoaded) {
            if (this.state.userWallet.length === 0) {
                return (<Redirect to="/" />)
            } else if (this.state.deleteCard) {
                console.log('here');
                return (<Redirect to="/wallet" />)
            } else {
                return (
                <Display card={card[0]} enableEdit={this.enableEdit} deleteCard={this.deleteCard} />
                )
            }
        } else {
            console.log('display else');
            return (
                <div>Loading page</div>
            )
        }
    }
}

export default Card;