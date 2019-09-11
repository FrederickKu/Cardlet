import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Display from './display';
import { Redirect } from "react-router-dom";
import Form from './form';



class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            enableEdit:false,
            userWallet: [],
            displayCard: {},
            isLoaded: false,
            deleteCard: false,
            cardEdit: {}
        }

        this.deleteCard=this.deleteCard.bind(this);
        this.enableEdit=this.enableEdit.bind(this);
        this.closeEdit=this.closeEdit.bind(this);
        this.submitEdit=this.submitEdit.bind(this);
        this.inputChangeHandler=this.inputChangeHandler.bind(this);
    }

    componentDidMount() {
        fetch("/getUserDetails")
        .then(response => response.json())
        .then((result) => {
            const cardID = parseInt(this.props.match.params.id);
            const allUserCard = result.userWallet.concat(result.userCard)
            const card = allUserCard.filter(card => card.namecard_id === cardID)[0];
            this.setState({displayCard: card, cardEdit: card, isLoaded: true})
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

        fetch("/wallet/deletecard", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then((result) => {
            this.setState({displayCard: {}, isLoaded:true, deleteCard: true})
        },
        (error) =>{
                console.log(error)
        })
    }

    enableEdit() {
        this.setState ({enableEdit: true});
    }

    inputChangeHandler (event) {
        let currentCard = this.state.cardEdit;
        currentCard[event.target.name] = event.target.value;

        this.setState({cardEdit:currentCard});
    }

    closeEdit() {
        this.setState({enableEdit: false});
    }

    submitEdit() {

        this.setState({isLoaded: false, enableEdit: false});

        let data = this.state.cardEdit;

        console.log(data);

        fetch("/wallet/editcard", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then((result) => {
            this.setState({displayCard: result.displayCard, cardEdit: result.displayCard, isLoaded: true})
        },
        (error) =>{
                console.log(error)
        })

    }

    render(){
        if (this.state.isLoaded) {
            if (this.state.deleteCard) {
                return (<Redirect to="/wallet" />)
            } else {
                return (
                    <div className={`${style.individualCardContainer}`}>
                        <p>Business Card</p>
                        <div className={`${style.individualCardDisplay}`}>
                            <div className={`${style.cardImage}`} style={{backgroundImage: `url(${this.state.displayCard.namecard_image})`}}></div>
                            { this.state.enableEdit ?
                                null
                                 :
                                (<div className={`${style.buttonContainer}`}>
                                    <p className={`${style.editButton}`}><i className={`bx bxs-edit`} onClick={this.enableEdit}></i></p>
                                    <p className={`${style.deleteButton}`}><i className={`bx bx-trash`} id={this.state.displayCard.namecard_id} onClick ={this.deleteCard} ></i></p>
                                </div>)
                            }
                        </div>
                        { this.state.enableEdit?
                                <Form
                                    card={this.state.displayCard}
                                    closeEdit={this.closeEdit}
                                    submitEdit={this.submitEdit}
                                    inputChangeHandler={this.inputChangeHandler}
                                />
                                :
                                <Display card={this.state.displayCard} />
                        }

                    </div>
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