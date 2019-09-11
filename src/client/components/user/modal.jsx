import React from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom'

const $ = window.$;

class UserModal extends React.Component {

    closeModal() {
        $('#userModal').modal('toggle');
    }

    render(){

        return(
        <div className={"modal fade"} id={"userModal"} tabIndex={"-1"} role={"dialog"} aria-labelledby={"User Modal"} aria-hidden={"true"}>
            <div className={`modal-dialog modal-dialog-centered ${style.setModalWidth}`} role={"document"}>
                <div className={"modal-content"}>
                    <div className={`modal-header ${style.headerDisplayFlex}`}>
                        <h5 className={"modal-title"}><i className='bx bxs-cog'></i> User Settings</h5>
                        <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                        <span aria-hidden={"true"}>&times;</span>
                        </button>
                    </div>
                    <div className={`modal-body`}>
                        <div className={`${style.modelButtonsContainer}`}>
                            <Link to='/user'><button className={"btn"} onClick={this.closeModal}>Edit Personal Namecards</button></Link>
                            <a href={"/logout"}><button className={"btn"}>Log Out</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default UserModal;