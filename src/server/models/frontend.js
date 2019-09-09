module.exports = (dbPoolInstance) => {

    let getUserCards = async function (id){
        const queryString = `SELECT * FROM namecards WHERE user_id = $1`;
        const values = [id];
        const queryResult = await dbPoolInstance.query(queryString,values);

        return queryResult.rows;
    }

    let getUserWallet = async function (id) {
        const queryString = "SELECT * FROM namecards INNER JOIN othercards ON (namecards.namecard_id = othercards.namecard_id) WHERE othercards.user_id = $1";
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
    return {
        getUserCards,
        getUserWallet,
        addCard,
        deleteCard
    };
}
