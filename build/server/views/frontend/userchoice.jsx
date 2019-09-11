var React = require("react");
import {isMobile} from "react-device-detect";
import Modal from './modal'

class Choice extends React.Component {

    checkMobile() {
        if (isMobile) {
            return <a href={"/user/upload"}><button className={"btn"}>Take a photo/Upload Business Card</button></a>
        }
        return <a href={"/user/upload"}><button className={"btn add-card-button-1"}>Upload Business Card</button></a>
    }

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
            <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.3/css/boxicons.min.css' rel='stylesheet' />
            <link rel={"stylesheet"} href={"/style.css"} />
            <title>Cardlet</title>
        </head>
        <body>
            <div className={"container-fluid p-0"}>
                <div className={'navigation'}>
                    <div className={'app-detail-container'}>
                        <img src={"https://res.cloudinary.com/dgv4tcunc/image/upload/v1567853175/C_yefdmo.png"} />
                        <p>ARDLET</p>
                    </div>
                    <div className={'navigation-top-container'}>
                        <a href={'/wallet/upload'}><i className={'bx bx-plus'}></i></a>
                    </div>
                </div>
                <div className={"add-card-parent-container"}>
                    <div className={"add-card-container mt-5"}>
                        <p className={"add-card-text"}>Add a Business Card.</p>
                        {this.checkMobile()}
                        <a href={"/user/design"}><button className={'btn add-card-button-2'}>Design a Business Card</button></a>
                    </div>
                </div>
                <div className={'footer'}>
                    <div className={`footerHome`}>
                        <p><a href={"/"}><i className={'bx bx-home'}></i></a></p>
                    </div>
                    <div className={`footerCard`}>
                        <p><a href={"/wallet"}><i className={'bx bx-id-card'}></i></a></p>
                    </div>
                    <div className={`footerPerson`}>
                        <p><i className={'bx bx-user'} data-toggle={"modal"} data-target={"#userModal"}></i></p>
                    </div>
                </div>
            </div>
            <Modal />
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Choice;
