import React from 'react';

class UserModal extends React.Component {

    render(){

        return(
        <div className={"modal fade"} id={"userModal"} tabIndex={"-1"} role={"dialog"} aria-labelledby={"User Modal"} aria-hidden={"true"}>
            <div className={`modal-dialog modal-dialog-centered setModalWidth`} role={"document"}>
                <div className={"modal-content"}>
                    <div className={`modal-header headerDisplayFlex`}>
                        <h5 className={"modal-title"}><i className='bx bxs-cog'></i> User Settings</h5>
                        <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                        <span aria-hidden={"true"}>&times;</span>
                        </button>
                    </div>
                    <div className={`modal-body`}>
                        <div className={"modelButtonsContainer"}>
                            <a href='/user'><button className={"btn"}>Edit Personal Namecards</button></a>
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