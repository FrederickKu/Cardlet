var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head>
            <meta charset={"utf-8"} />
            <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
            <meta name={"mobile-web-app-capable"} content={"yes"} />
            <meta name={"author"} content={"Anton Fisher"} />
            <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"} integrity={"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"} crossorigin={"anonymous"} />
            <link rel={"stylesheet"} href={"/style.css"} />
            <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
            <title>Cardlet Login</title>
        </head>
        <body>
            <div class={"container-fluid p-0"}>
                <div className={"homeDisplay"}>
                    <div className={"homeImage"}>
                        <img src="https://res.cloudinary.com/dgv4tcunc/image/upload/v1567757922/Cardnect_fqub79.png" />
                    </div>
                    <p className={"homeText"}>A Wallet for Namecards</p>
                </div>
                <div className={"loginForm"}>
                    <form method={'POST'} action={"/login"}>
                        <div className={"form-group"}>
				            <input type={"text"} className={"form-control text-input"} placeholder ={'Username'} aria-describedby={"Username"} name={'username'} />
				        </div>
                        <div className={"form-group"}>
				            <input type={"password"} className={"form-control text-input"} placeholder ={'Password'} aria-describedby={"Password"} name={'password'} />
				        </div>
                        <button type={'submit'} className={'btn btn-lg'}>Login</button>
                    </form>
                </div>
                <div className={'login-signup'}>
                    <p>No account yet?</p>
                    <a href="/signup">Register</a>
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

module.exports = Login;
