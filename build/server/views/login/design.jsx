var React = require("react");

class Design extends React.Component {

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
                <div className={'design-card-parent-container'}>
                    <div className={"design-card-container"}>
                        <p>Design Your Business Card</p>
                        <div className={"card-design"} id = {"card-design"}>
                            <div id={'card-design-top-right'}>
                                <p id={'card-design-name'}>Frederick Aberdeen</p>
                                <p id={'card-design-title'}>Software Engineer</p>
                            </div>
                            <div id={'card-design-bottom-left'}>
                                <p><span className={'label'}>M: </span><span id={'card-design-mobile'}>+65 9876 5432</span></p>
                                <p><span className={'label'}>E: </span><span id={'card-design-email'}>frederick.aberdeen@example.com</span></p>
                                <p><span className={'label'}>C: </span><span id={'card-design-company'}>General Assembly</span></p>
                                <p><span className={'label'}>W: </span><span id={'card-design-website'}>www.example.com</span></p>
                            </div>
                            <div id ={'cardbar'}>
                            </div>
                        </div>
                        <form method={"post"} action={"/signup2/addCard"} >
                            <div className={"form-group"}>
                                <label for={"card-name"}>Name</label>
                                <input type={"text"} className={"form-control"} id={"card-name"} placeholder={"e.g John Doe"}  name={'name'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-title"}>Title</label>
                                <input type={"text"} className={"form-control"} id={"card-title"} placeholder={"e.g Software Developer"} name={'title'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-phone"}>Phone</label>
                                <input type={"text"} className={"form-control"} id={"card-phone"} placeholder={"e.g +65 6123 4567"} name={'phone'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-mobile"}>Mobile</label>
                                <input type={"text"} className={"form-control"} id={"card-mobile"} placeholder={"e.g +65 9876 5432"} name={'mobile'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-email"}>Email</label>
                                <input type={"text"} className={"form-control"} id={"card-email"} placeholder={"e.g john.doe@email.com"} name={'email'}/>
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-company"}>Company</label>
                                <input type={"text"} className={"form-control"} id={"card-company"} placeholder={"e.g JD Corportation"} name={'company'}/>
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-address"}>Address</label>
                                <input type={"text"} className={"form-control"} id={"card-address"} placeholder={"e.g 10 Example Road S(123456)"} name={'address'} />
                            </div>
                            <div className={"form-group"}>
                                <label for={"card-website"}>Website</label>
                                <input type={"text"} className={"form-control"} id={"card-website"} placeholder={"e.g www.jdc.org"} name={'website'} />
                            </div>
                            <input type={"hidden"} name={"url"}   defaultValue = {"nil"} />
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
            <script src="/script2.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Design;
