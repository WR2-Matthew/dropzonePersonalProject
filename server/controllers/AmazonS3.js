// require('dotenv').config();
// const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const path = require('path');
// const { S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

// aws.config.update({
//   secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   accessKeyId: AWS_ACCESS_KEY_ID,
//   region: AWS_REGION
// })

// const s3 = new aws.S3();

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/jpeg' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/png'
//   ) {
//     cb(null, true)
//   } else {
//     cb(new Error('Files must be in format jpg, jpeg, or png'), false);
//   };
// }

// const singleUpload = multer({
//   fileFilter,
//   limits: { fileSize: 4000000 },
//   storage: multerS3({
//     s3,
//     bucket: S3_BUCKET,
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, {
//         fieldName: 'TESTING_META_DATA!'
//         // fieldName: 
//         // fieldName: 
//       });
//     },
//     key: function (req, file, cb) {
//       // cb(null, Date.now().toString());
//       cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now().toString() + path.extname(file.originalname));
//     }
//   })
// }).single('image')

// const imgAdd = function (req, res) {

//   singleUpload(req, res, function (err) {

//     if (err) {
//       console.log(`File Upload Error: ${err.message}`);
//       return res.status(422).send(err.message);
//     } else {
//       return res.status(201).json({
//         'img_aws_url': req.file.location,
//         'img_aws_key': req.file.key
//       });
//     };
//   });
// };

// module.exports = {
//   imgAdd
// }


















// the endpoint receives the request that was just made.
// we are configuring our aws with the app's credentials.
// app.get('/api/signs3', (req, res) => {
//   aws.config = {
//     region: 'us-west-1',
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   };

//   const s3 = new aws.S3();
//   const fileName = req.query['file-name'];
//   const fileType = req.query['file-type'];
//   const s3Params = {
//     Bucket: S3_BUCKET,
//     Key: fileName,
//     Expires: 60,
//     ContentType: fileType,
//     ACL: 'public-read',
//   };

//   s3.getSignedUrl('putObject', s3Params, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.end();
//     }
//     const returnData = {
//       signedRequest: data,
//       url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
//     };

//     return res.send(returnData);
//   });
// });













// uuid = require('uuid'),
// const s3 = new AWS.S3({
//   AWS_ACCESS_KEY_ID,
//   AWS_SECRET_ACCESS_KEY
// })

// const storage = multer.memoryStorage({
//   destination: function (req, file, callback) {
//     callback(null, '')
//   }
// })

// const upload = multer({ storage }).single('image')

// app.post('/upload', upload, (req, res) => {

//   let myFile = req.file.originalname.split('.')
//   const fileType = myFile[myFile.length - 1]

//   // console.log(req.file)
//   // res.send({
//   //   message: 'Hello'
//   // })

//   const params = {
//     S3_BUCKET,
//     key: `${uuid()}.${fileType}`,
//     body: req.file.buffer
//   }

//   s3.upload(params, (error, data) => {
//     if (error) {
//       res.status(500).send(error)
//     }
//     res.status(200).send(data)
//   })
// })