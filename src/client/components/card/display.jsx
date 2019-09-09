import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';


class Card extends React.Component {
    render(){
            return (
                <div className={`${style.individualCardContainer}`}>
                    <p>Business Card</p>
                    <div className={`${style.individualCardDisplay}`}>
                        <div className={`${style.cardImage}`} style={{backgroundImage: `url(${this.props.card.namecard_image})`}}></div>
                        <div className={`${style.buttonContainer}`}>
                            <button className = {`btn ${style.editButton}`} onClick = {this.enableEdit}>Edit</button>
                            <button className = {'btn btn-danger'} id={this.props.card.namecard_id} onClick ={this.props.deleteCard} >Delete</button>
                        </div>
                    </div>
                    <div className={`${style.displayCardInfo}`}>
                    <table class="table table-bordered">
                            <colgroup>
                                <col className={`${style.tableBKG}`} />
                                <col className={`${style.infoWidth}`} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td className={`${style.headerFont}`}>Name:</td>
                                    <td colspan="2">{this.props.card.name}</td>
                                </tr>
                                <tr>
                                    <td className={`${style.headerFont}`}>Title:</td>
                                    <td colspan="2">{this.props.card.title}</td>
                                </tr>
                                <tr>
                                    <td className={`${style.headerFont}`}>Phone:</td>
                                    <td colspan="2">{this.props.card.phone}</td>
                                </tr>
                                <tr>
                                    <td className={`${style.headerFont}`}>Mobile:</td>
                                    <td colspan="2">{this.props.card.mobile}</td>
                                </tr>
                                <tr>
                                    <td className={`${style.headerFont}`}>Email: </td>
                                    <td colspan="2">{this.props.card.email}</td>
                                </tr>
                                <tr>
                                    <td className={`${style.headerFont}`} >Company: </td>
                                    <td colspan="2">{this.props.card.company}</td>
                                </tr>
                                <tr>
                                    <td className={`${style.headerFont}`}>Website: </td>
                                    <td colspan="2">{this.props.card.website}</td>
                                </tr>
                                <tr>
                                    <td className={`${style.headerFont}`}>Address: </td>
                                    <td colspan="2">{this.props.card.address}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
    }
}

export default Card;