require('dotenv').config()
const express = require('express'),
  massive = require('massive'),
  app = express(),
  session = require('express-session'),
  authCtrl = require('./controllers/AuthController'),
  dzCtrl = require('./controllers/DzController'),
  // aws = require('aws-sdk'),
  // multer = require('multer'),
  // multerS3 = require('multer-s3'),
  // s3 = new aws.S3(),
  { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log("DB connected!")
}).catch(error => {
  console.log(error)
});

app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);

app.get('/api/dropzones', dzCtrl.getAllDropzones);

app.listen(SERVER_PORT, () => console.log(`Rating on port ${SERVER_PORT}!!`));










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