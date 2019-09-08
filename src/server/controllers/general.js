var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'dgv4tcunc',
    api_key: '494212145461432',
    api_secret: 'd3fmILHQD53B3AqwQHC3s87Xp0U'
});



module.exports = (db) => {
  let getCloudinaryURL = async function (request,response) {
    cloudinary.uploader.upload(request.file.path, async function(photoResult) {
        response.send (photoResult.url);
    });
  }

  return {
    getCloudinaryURL
  };
};
