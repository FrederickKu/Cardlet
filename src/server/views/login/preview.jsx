var React = require("react");

class Preview extends React.Component {

  render() {

    return (
      <html>
        <head>
            <meta charset={"utf-8"} />
            <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
            <meta name={"mobile-web-app-capable"} content={"yes"} />
            <meta name={"author"} content={"Anton Fisher"} />
            <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"} integrity={"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"} crossorigin={"anonymous"} />
            <link href={"https://fonts.googleapis.com/css?family=PT+Sans&display=swap"} rel={"stylesheet"} />
            <link rel={"stylesheet"} href={"/style.css"} />
            <title>Cardlet Register</title>
        </head>
        <body>
            <div className={"container-fluid p-0"}>
                <div className={'navigation'}>
                    <div className={'app-detail-container'}>
                        <img src={"https://res.cloudinary.com/dgv4tcunc/image/upload/v1567853175/C_yefdmo.png"} />
                        <p>ARDLET</p>
                    </div>
                    <div className={'navigation-top-container'}>
                        <a href={'/logout'}>Sign Out</a>
                    </div>
                </div>
                <div className={'confirm-card-parent-container'}>
                    <div className={"confirm-card-container"}>
                        <div className={"card-preview"} id = {"card-preview"} style={{backgroundImage: `url(${this.props.url})`}}>
                        </div>
                        <p>Edit/Confirm Details</p>
                        <form method={"post"} action={"/signup2/addCard"} >
                            <div className={"form-group"}>
                                <label for={"card-name"}>Name</label>
                                <input type={"text"} className={"form-control"} id={"card-name"} placeholder={"Name"}   defaultValue={this.props.name} name={'name'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-title"}>Title</label>
                                <input type={"text"} className={"form-control"} id={"card-title"} placeholder={"Title"}   defaultValue={this.props.title} name={'title'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-phone"}>Phone</label>
                                <input type={"text"} className={"form-control"} id={"card-phone"} placeholder={"Phone"}   defaultValue={this.props.phone} name={'phone'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-mobile"}>Mobile</label>
                                <input type={"text"} className={"form-control"} id={"card-mobile"} placeholder={"Mobile"}   defaultValue={this.props.mobile} name={'mobile'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-email"}>Email</label>
                                <input type={"text"} className={"form-control"} id={"card-email"} placeholder={"Email"}   defaultValue={this.props.email} name={'email'}/>
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-company"}>Company</label>
                                <input type={"text"} className={"form-control"} id={"card-company"} placeholder={"Company"}   defaultValue={this.props.company} name={'company'}/>
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-website"}>Website</label>
                                <input type={"text"} className={"form-control"} id={"card-website"} placeholder={"Website"}   defaultValue={this.props.website} name={'website'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-address"}>Address</label>
                                <textarea col={"3"} type={"text"} className={"form-control"} id={"card-address"} placeholder={"Address"}   defaultValue={this.props.address}  name={'address'} />
                            </div>
                            <input type={"hidden"} name={"url"}   defaultValue = {this.props.url} />
                            <div className={'add-card-button-container'}>
                                <button className={'btn'} type={'submit'}>Add Card</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={'footer'}>
                    <p>A smarter way to store Business Cards</p>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Preview;
