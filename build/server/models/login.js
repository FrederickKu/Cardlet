var sha256=require('js-sha256')
var PSALT='NaMeCaRd fTw!!!';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let addUser = async function (username, password, name, photo) {
    try {
        const hashedPassword = sha256(password+PSALT)
        const defaultPhoto = "https://res.cloudinary.com/dgv4tcunc/image/upload/v1567770337/defaultperson_bc1xxt.png";
        const queryString = `INSERT INTO users (username,password,user_name,user_photo) VALUES ($1,$2,$3,$4) RETURNING *`;

        console.log('#################################')
        console.log(photo);
        console.log('#################################')

        if (photo !== null) {
            var values = [username, hashedPassword, name, photo]
        } else {
            var values = [username, hashedPassword, name,defaultPhoto]
        }

        const queryResult = await dbPoolInstance.query(queryString,values);

        const resultName = queryResult.rows[0].user_name;
        const resultUsername = queryResult.rows[0].username;

        return [resultName,resultUsername];

    } catch(error){
        console.log("Add User:",error)
    }
  }

    let getUserDetails = async function (username) {
        try {
            const queryString = `SELECT user_id, username, user_name, user_photo FROM users WHERE username = $1`;
            const values = [username]
            const queryResult = await dbPoolInstance.query(queryString,values);

            if (queryResult.rows.length === 0 ){
                return ([false, null])
            } else {
                return ([true,queryResult.rows[0]])
            }

        } catch(error){
            console.log("Get User Details:",error)
        }
    }

    let addCard = async function (card,username){
        try {
            let name = card.name;
            let title = card.title;
            let phone = card.phone;
            let mobile = card.mobile;
            let email = card.email;
            let company = card.company;
            let address = card.address;
            let website = card.website;
            let url = card.url;

            let queryString = `SELECT user_id FROM users WHERE username = $1`;
            let values = [username]
            let queryResult = await dbPoolInstance.query(queryString,values);

            let userID=queryResult.rows[0].user_id;

            queryString = "INSERT INTO namecards (name,title,phone,mobile,email,company,address,website, namecard_image, user_id, default_card) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, $10, TRUE) returning *";
            values = [name,title,phone,mobile,email,company,address,website,url,userID];

            queryResult = dbPoolInstance.query(queryString,values)

            return true;
        } catch(error) {
            console.log("Add Card",error)
            return false;
        }
    }

    let login = async function (username,password) {
        try {
            const queryString = `SELECT password FROM users WHERE username = $1`;
            const values = [username]
            const queryResult = await dbPoolInstance.query(queryString,values);
            const hashedPassword = sha256(password+PSALT)


            if (queryResult.rows[0].password === hashedPassword) {
                return true;
            }

            return false;

        } catch(error){
            console.log("Get User Details:",error)
        }
    }

  return {
    addUser,
    getUserDetails,
    addCard,
    login
  };
};
