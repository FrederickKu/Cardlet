import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class Display extends React.Component {
    render(){
            return (
                 <div className={`${style.displayCardInfo}`}>
                    <table className={"table table-bordered"}>
                        <colgroup>
                            <col className={`${style.tableBKG}`} />
                            <col className={`${style.infoWidth}`} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td className={`${style.headerFont}`}>Name:</td>
                                <td colSpan="2">{this.props.card.name}</td>
                            </tr>
                            <tr>
                                <td className={`${style.headerFont}`}>Title:</td>
                                <td colSpan="2">{this.props.card.title}</td>
                            </tr>
                            <tr>
                                <td className={`${style.headerFont}`}>Phone:</td>
                                <td colSpan="2">{this.props.card.phone}</td>
                            </tr>
                            <tr>
                                <td className={`${style.headerFont}`}>Mobile:</td>
                                <td colSpan="2">{this.props.card.mobile}</td>
                            </tr>
                            <tr>
                                <td className={`${style.headerFont}`}>Email: </td>
                                <td colSpan="2">{this.props.card.email}</td>
                            </tr>
                            <tr>
                                <td className={`${style.headerFont}`} >Company: </td>
                                <td colSpan="2">{this.props.card.company}</td>
                            </tr>
                            <tr>
                                <td className={`${style.headerFont}`}>Website: </td>
                                <td colSpan="2">{this.props.card.website}</td>
                            </tr>
                            <tr>
                                <td className={`${style.headerFont}`}>Address: </td>
                                <td colSpan="2">{this.props.card.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            )
    }
}

export default Display;