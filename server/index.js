require('dotenv').config()
const express = require('express'),
  massive = require('massive'),
  app = express(),
  session = require('express-session'),
  authCtrl = require('./controllers/AuthController'),
  dzCtrl = require('./controllers/DzController'),
  jumpCtrl = require('./controllers/JumpsController'),
  trans = require('./controllers/Transporter'),
  aws = require('aws-sdk'),
  path = require('path'),
  { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

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

//AMAZON CONNECTION SETUP
app.get('/sign-s3', (req, res) => {
  aws.config = {
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  }
  const s3 = new aws.S3({ signatureVersion: 'v4' });
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };


  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };

    return res.send(returnData)
  });
});

//AUTH ENDPOINT
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/session', authCtrl.session);

//DROPZONE ENDPOINT
app.get('/api/dropzones', dzCtrl.getAllDropzones);
app.post('/api/create/dropzone/:userId', dzCtrl.createDropzone)

//RATING ENDPOINT
app.post('/api/rate/dropzone', dzCtrl.addRating)

//JUMPS ENDPOINT
app.get('/api/jumps/:userId', jumpCtrl.getJumps)
app.post('/api/create/jump/:userId', jumpCtrl.createJump)
app.delete('/api/delete/jump/:id', jumpCtrl.deleteJump)
app.put('/api/edit/jump/:userId', jumpCtrl.editJump)

//NODEMAILER
app.post('/api/email', trans.email);

//HOSTING
app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
});

app.listen(SERVER_PORT, () => console.log(`Rating on port ${SERVER_PORT}!!`));