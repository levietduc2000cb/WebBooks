const cloudinary = require('cloudinary');
const { append } = require('express/lib/response');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:  process.env.CLOUDINARY_API_SECRET
  });

module.exports = cloudinary