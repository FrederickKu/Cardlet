import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class Form extends React.Component {
    render(){
        return (
            <div className={`${style.formContainer}`} >
                <div className={"form-group"}>
                    <label htmlFor={"card-name"}>Name</label>
                    <input  type={"text"}
                            className={"form-control"}
                            id={"card-name"}
                            placeholder={"Name"}
                            defaultValue={this.props.card.name}
                            name={'name'}
                            onChange={this.props.inputChangeHandler} />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"card-title"}>Title</label>
                    <input type={"text"}
                           className={"form-control"}
                           id={"card-title"}
                           placeholder={"Title"}
                           defaultValue={this.props.card.title}
                           name={'title'}
                           onChange={this.props.inputChangeHandler} />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"card-phone"}>Phone</label>
                    <input type={"text"}
                           className={"form-control"}
                           id={"card-phone"}
                           placeholder={"Phone"}
                           defaultValue={this.props.card.phone}
                           name={'phone'}
                           onChange={this.props.inputChangeHandler} />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"card-mobile"}>Mobile</label>
                    <input type={"text"}
                           className={"form-control"}
                           id={"card-mobile"}
                           placeholder={"Mobile"}
                           defaultValue={this.props.card.mobile}
                           name={'mobile'}
                           onChange={this.props.inputChangeHandler} />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"card-email"}>Email</label>
                    <input type={"text"}
                           className={"form-control"}
                           id={"card-email"}
                           placeholder={"Email"}
                           defaultValue={this.props.card.email}
                           name={'email'}
                           onChange={this.props.inputChangeHandler} />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"card-company"}>Company</label>
                    <input type={"text"}
                           className={"form-control"}
                           id={"card-company"}
                           placeholder={"Company"}
                           defaultValue={this.props.card.company}
                           name={'company'}
                           onChange={this.props.inputChangeHandler} />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"card-website"}>Website</label>
                    <input type={"text"}
                           className={"form-control"}
                           id={"card-website"}
                           placeholder={"Website"}
                           defaultValue={this.props.card.website}
                           name={'website'}
                           onChange={this.props.inputChangeHandler} />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"card-address"}>Address</label>
                    <textarea type={"text"}
                              className={"form-control"}
                              id={"card-address"}
                              placeholder={"Address"}
                              rows={"3"}
                              defaultValue={this.props.card.address}
                              name={'address'}
                              onChange={this.props.inputChangeHandler}/>
                </div>
                <div className={`${style.formButtons}`}>
                    <button className={`btn ${style.confirmEdit}`} onClick={this.props.submitEdit}>Edit Card</button>
                    <button className={`btn ${style.cancelEdit}`} onClick={this.props.closeEdit}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Form;










