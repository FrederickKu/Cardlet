var multer = require('multer');
const path = require('path');
var upload = multer({ dest: path.join(__dirname, 'uploads') });


module.exports = (app, db) => {
  const login = require('./controllers/login')(db);
  const frontend = require('./controllers/frontend')(db);

  // Login controlller
  app.get('/login', login.displayLogin);
  app.post('/login',login.login);
  app.get('/logout',login.signout)
  app.get('/signup',login.displaySignup);
  app.post('/signup',upload.single('photo'),login.registerPartOne);
  app.get('/signup2',login.displaySignupTwo);
  app.get('/signup2/upload',login.displayUpload);
  app.post('/signup2/upload',upload.single('photo'),login.previewNamecard);
  app.post('/signup2/addCard',login.addCard)
  app.get('/signup2/design',login.designCard)

  // frontend AJAX Calls
  app.get('/getUserDetails', frontend.getUserDetails);
  app.post('/wallet/deletecard',frontend.deleteCard);
  app.post('/wallet/editcard',frontend.editCard);

  //backend routes
  app.get('/wallet/upload', frontend.displayAddCard);
  app.post('/wallet/preview',upload.single('photo'),frontend.previewNameCard)
  app.post('/wallet/addcard',frontend.addCard);
  app.post('/deleteusercard', frontend.deleteUserCard);
  app.get('/user/addcard', frontend.displayUserChoice);
  app.get('/user/upload', frontend.displayUserUpload);
  app.post('/user/upload',upload.single('photo'),frontend.previewUserCard);
  app.post('/user/addcard',frontend.userAddCard);
  app.get('/user/design',frontend.userDesignCard);
  app.post('/user/changedefault',frontend.userChangeDefault);

};