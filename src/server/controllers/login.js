var performOCR = require('./performOCR');
var cloudinary = require('cloudinary');
var sha256=require('js-sha256');
var SALT = 'ReAl sMo0Th Dude';

cloudinary.config({
    cloud_name: 'dgv4tcunc',
    api_key: '494212145461432',
    api_secret: 'd3fmILHQD53B3AqwQHC3s87Xp0U'
});


module.exports = (db) => {


  let displayLogin = async function (request, response) {
    response.render('login/login');
  };

  let displaySignup = async function (request, response) {
    response.render('login/signup');
  };

  let registerPartOne = async function (request,response) {
    if (request.file !== undefined) {
        cloudinary.uploader.upload(request.file.path, async function(photoResult) {
            const [name,username] = await db.login.addUser(request.body.username, request.body.password, request.body.name, photoResult.url);
            const cookie = sha256(username+SALT);
            response.cookie('meow', cookie);
            response.cookie('woof', username);
            response.redirect("/signup2");
        })
    } else {
            const [name,username] = await db.login.addUser(request.body.username, request.body.password, request.body.name, "");
            const cookie = sha256(username+SALT);
            response.cookie('meow', cookie);
            response.cookie('woof', username);
            response.redirect("/signup2");
    }
  };

  let displaySignupTwo = async function (request,response) {
      let [exist,details] = await db.login.getUserDetails(request.cookies.woof);

      response.render('login/signup2',{details:details});
  };

  let displayUpload = async function (request,response) {
      response.render('login/upload')
  };

  let previewNamecard = async function (request,response) {
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
            response.render('login/preview', cardData);
        });
    });
  }

  let addCard = async function (request,response) {
    let success = await db.login.addCard(request.body,request.cookies.woof)

    success ? response.redirect('/') : response.status(404);
  }

  let designCard = async function (request,response) {
      response.render('login/design');
  }

  let login = async function (request,response) {
      let success = await db.login.login(request.body.username, request.body.password);

      if (success) {
        const cookie = sha256(request.body.username+SALT);
        response.cookie('meow', cookie);
        response.cookie('woof', request.body.username);
        response.redirect('/');
      } else {
        response.redirect('/login');
      }
  }

  let signout = async function (request,response) {
      response.clearCookie('woof');
      response.clearCookie('meow');

      response.redirect('/');
  }

  return {
    displayLogin,
    displaySignup,
    registerPartOne,
    displaySignupTwo,
    displayUpload,
    previewNamecard,
    addCard,
    designCard,
    login,
    signout
  };
};
