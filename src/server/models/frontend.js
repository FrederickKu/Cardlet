module.exports = (dbPoolInstance) => {

    let getUserCards = async function (id){
        const queryString = `SELECT * FROM namecards WHERE user_id = $1 ORDER BY default_card DESC`;
        const values = [id];
        const queryResult = await dbPoolInstance.query(queryString,values);

        return queryResult.rows;
    }

    let getUserWallet = async function (id) {
        const queryString = "SELECT * FROM namecards INNER JOIN othercards ON (namecards.namecard_id = othercards.namecard_id) WHERE othercards.user_id = $1 ORDER BY updated_at DESC";
        const values = [id];
        const queryResult = await dbPoolInstance.query(queryString,values);

        return queryResult.rows;
    }

    let addCard = async function (card,username) {
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

            queryString = "INSERT INTO namecards (name,title,phone,mobile,email,company,address,website, namecard_image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *";
            values = [name,title,phone,mobile,email,company,address,website,url];

            queryResult = await dbPoolInstance.query(queryString,values)

            let namecardID= queryResult.rows[0].namecard_id;

            queryString = "INSERT INTO othercards (user_id,namecard_id) VALUES ($1,$2)";
            values = [userID,namecardID];
            queryResult =  await dbPoolInstance.query(queryString,values);

            return true;
        } catch(error) {
            console.log("Add Card",error)
            return false;
        }


    }


    let deleteCard = async function (namecard_id, username) {
        try {
            let queryString = `SELECT user_id FROM users WHERE username = $1`;
            let values = [username]
            let userDetails= await dbPoolInstance.query(queryString,values);

            let userID=userDetails.rows[0].user_id;

            //Delete From User Wallets
            queryString = 'DELETE FROM othercards WHERE namecard_id = $1 AND user_id = $2';
            values = [namecard_id,userID];
            let queryResult = await dbPoolInstance.query(queryString,values);

            return userID;
        } catch (error) {
            console.log(error)
            return false;
        }

    }

    let editCard = async function (details,username) {
        try {
            let queryString = "UPDATE namecards SET namecard_image = $1, name = $2, title = $3, phone = $4, mobile = $5, email = $6, website = $7, address = $8, company = $9, updated_at = CURRENT_TIMESTAMP WHERE namecard_id = $10";
            let values = [details.namecard_image,details.name,details.title,details.phone,details.mobile,details.email,details.website,details.address,details.company,details.namecard_id];

            let queryResult = await dbPoolInstance.query(queryString,values);

            queryString = `SELECT user_id FROM users WHERE username = $1`;
            values = [username];
            queryResult = await dbPoolInstance.query(queryString,values);

            let userID=queryResult.rows[0].user_id;

            queryString = "SELECT * FROM namecards INNER JOIN othercards ON (namecards.namecard_id = othercards.namecard_id) WHERE othercards.user_id = $1 AND namecards.namecard_id = $2";
            values = [userID,details.namecard_id];

            queryResult = await dbPoolInstance.query(queryString,values);

            return queryResult.rows[0];
        } catch (error) {
            console.log(error);
        }
    }


    let deleteUserCard = async function (id) {
        try {
            let queryString = "UPDATE namecards SET user_id = null WHERE namecard_id = $1";
            let values = [id];

            let queryResult = await dbPoolInstance.query(queryString,values);

            return;
        } catch (error) {
            console.log(error);
        }
    }

    let userAddCard = async function (card,username) {
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

            queryString = "INSERT INTO namecards (name,title,phone,mobile,email,company,address,website, namecard_image,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, $10) returning *";
            values = [name,title,phone,mobile,email,company,address,website,url,userID];

            queryResult = await dbPoolInstance.query(queryString,values)

            return true;
        } catch(error) {
            console.log("Add Card",error)
            return false;
        }

    }

    let changeDefault = async function (oldID, newID){
        try {
            let queryString = "UPDATE namecards SET default_card = FALSE WHERE namecard_id = $1";
            let values = [oldID];

            let queryResult = await dbPoolInstance.query(queryString,values);

            queryString = "UPDATE namecards SET default_card = TRUE WHERE namecard_id = $1";
            values = [newID];

            queryResult = await dbPoolInstance.query(queryString,values);

            return;
        } catch(error) {
            console.log("Change Card",error)
            return false;
        }
    }

    return {
        getUserCards,
        getUserWallet,
        addCard,
        deleteCard,
        editCard,
        deleteUserCard,
        userAddCard,
        changeDefault
    };
}
