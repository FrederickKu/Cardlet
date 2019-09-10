import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class UserModal extends React.Component {

    render(){
        return(
        <div className={"modal fade"} id={"userModal"} tabindex={"-1"} role={"dialog"} aria-labelledby={"User Modal"} aria-hidden={"true"}>
            <div className={`modal-dialog modal-dialog-centered ${style.setModalWidth}`} role={"document"}>
                <div className={"modal-content"}>
                    <div className={`modal-header ${style.headerDisplayFlex}`}>
                        <h5 className={"modal-title"}><i class='bx bxs-cog'></i> User Settings</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={`modal-body`}>
                        <div className={`${style.modelButtonsContainer}`}>
                            <a href={"#"}><button className={"btn"}>Set Default Namecard</button></a>
                            <a href={"#"}><button className={"btn"}>Edit Personal Namecards</button></a>
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