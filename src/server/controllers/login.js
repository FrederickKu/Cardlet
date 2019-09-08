var cloudinary = require('cloudinary');
var sha256=require('js-sha256');
var SALT = 'ReAl sMo0Th Dude';

cloudinary.config({
    cloud_name: 'dgv4tcunc',
    api_key: '494212145461432',
    api_secret: 'd3fmILHQD53B3AqwQHC3s87Xp0U'
});

var ocrsdkModule = require('./ocrsdk.js');
var serviceUrl = 'https://cloud.ocrsdk.com';
var appId = 'cardwallet';
var password = 'b+xfYUCyY8h7Xz6N8ch+dPGl';

module.exports = (db) => {

  let performOCR = function (imagePath, returnFunction) {
    console.log("ABBYY Cloud OCR SDKfor Node.js");

    var ocrsdk = ocrsdkModule.create(appId, password, serviceUrl);

    var settings = new ocrsdkModule.ProcessingSettings();
    // Set your own recognition language and output format here
    settings.language = "English"; // Can be comma-separated list, e.g. "German,French".
    settings.exportFormat = "xml"; // All possible values are listed in 'exportFormat' parameter description
                                    // at https://ocrsdk.com/documentation/apireference/processImage/


        function downloadCompleted(error, results) {
            if (error) {
                console.log("Error1: " + error.message);
                return;
            }
            console.log("Done.");
            returnFunction(results);
        }

        function processingCompleted(error, taskData) {
            if (error) {
                console.log("Error2: " + error.message);
                return;
            }

            if (taskData.status != 'Completed') {
                console.log("Error processing the task.");
                if (taskData.error) {
                    console.log("Message: " + taskData.error);
                }
                return;
            }

            console.log("Processing completed.");
            console.log("Downloading results");

            ocrsdk.downloadResult(taskData.resultUrl.toString(), downloadCompleted);
        }

        function uploadCompleted(error, taskData) {
            if (error) {
                console.log("Error3: " + error.message);
                return;
            }

            console.log("Upload completed.");
            console.log("Task id = " + taskData.id + ", status is " + taskData.status);
            if (!ocrsdk.isTaskActive(taskData)) {
                console.log("Unexpected task status " + taskData.status);
                return;
            }

            ocrsdk.waitForCompletion(taskData.id, processingCompleted);
        }

        console.log("Uploading image..");
        ocrsdk.processImage(imagePath, settings, uploadCompleted);
  }

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
    await performOCR(request.file.path,(result)=>{
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
