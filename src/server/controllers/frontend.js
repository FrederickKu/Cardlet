var performOCR = require('./performOCR');
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'dgv4tcunc',
    api_key: '494212145461432',
    api_secret: 'd3fmILHQD53B3AqwQHC3s87Xp0U'
});

module.exports = (db) => {

    let getUserDetails = async function (request,response) {
        let [success,userDetails] = await db.login.getUserDetails(request.cookies.woof);
        let userCard = await db.frontend.getUserCards(userDetails.user_id);
        let userWallet =  await db.frontend.getUserWallet(userDetails.user_id);

        let data = {
            userDetails: userDetails,
            userCard: userCard,
            userWallet: userWallet
        }

        response.send(data);

    }

    let displayAddCard = async function (request,response) {
        response.render ('frontend/addcard')
    }

    let previewNameCard = async function (request,response) {
        await performOCR.performOCR(request.file.path,(result)=>{
            result = JSON.parse(result);
            let resultFields = result.document.businessCard.field;

            cardData = {
                name: "",
                title: "",
                phone: "",
                mobile: "",
                email: "",
                website: "",
                address: "",
                company: "",
                url: ""
            }

            resultFields.forEach((field) => {
                let attributeName = field._attributes.type.toLowerCase();
                let fieldValue = field.value._text;

                if (attributeName in cardData && cardData[attributeName] === ""){
                    cardData[attributeName] = fieldValue;
                }
            })

            cloudinary.uploader.upload(request.file.path, async function(photoResult) {
                cardData.url = photoResult.url;
                response.render('frontend/preview', cardData);
            });
        });

    }

    let addCard = async function (request,response) {
        let success = await db.frontend.addCard(request.body,request.cookies.woof)

        success ? response.redirect('/wallet') : response.status(404);
    }


    let deleteCard = async function (request,response) {
        let userID= await db.frontend.deleteCard(parseInt(request.body.id),request.cookies.woof);
        let userWallet =  await db.frontend.getUserWallet(userID);

        response.send({userWallet:userWallet})
    }

    let editCard= async function (request,response) {
        let displayCard = await db.frontend.editCard(request.body,request.cookies.woof);

        response.send({displayCard:displayCard})
    }

    let deleteUserCard = async function (request,response) {
        let [success,userDetails] = await db.login.getUserDetails(request.cookies.woof);
        let deleteCard = await db.frontend.deleteUserCard(request.body.id);
        let userCard = await db.frontend.getUserCards(userDetails.user_id);

        response.send({userCard:userCard})

    }

    let displayUserChoice = async function (request,response) {
        response.render('frontend/userchoice');
    }

    let displayUserUpload = async function (request,response){
        response.render('frontend/userupload')
    }

    let previewUserCard = async function (request,response){
        await performOCR.performOCR(request.file.path,(result)=>{
            result = JSON.parse(result);
            let resultFields = result.document.businessCard.field;

            cardData = {
                name: "",
                title: "",
                phone: "",
                mobile: "",
                email: "",
                website: "",
                address: "",
                company: "",
                url: ""
            }

            resultFields.forEach((field) => {
                let attributeName = field._attributes.type.toLowerCase();
                let fieldValue = field.value._text;

                if (attributeName in cardData && cardData[attributeName] === ""){
                    cardData[attributeName] = fieldValue;
                }
            })

            cloudinary.uploader.upload(request.file.path, async function(photoResult) {
                cardData.url = photoResult.url;
                response.render('frontend/previewuser', cardData);
            });
        });

    }

    let userAddCard = async function (request,response) {
        let success = await db.frontend.userAddCard(request.body,request.cookies.woof)

        success ? response.redirect('/user') : response.status(404);

    }

    let userDesignCard = async function (request,response) {
        response.render('frontend/userdesign')
    }

  return {
      getUserDetails,
      displayAddCard,
      previewNameCard,
      addCard,
      deleteCard,
      editCard,
      deleteUserCard,
      displayUserChoice,
      displayUserUpload,
      previewUserCard,
      userAddCard,
      userDesignCard
  };
};
