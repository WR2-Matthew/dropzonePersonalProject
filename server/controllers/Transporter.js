const nodemailer = require('nodemailer'),
  { EMAIL, PASSWORD } = process.env;

module.exports = {
  email: async (req, res) => {
    const { email } = req.body

    try {
      //The transporter is essentially the email that you are using to send
      //emails to your users. This is done using NodeMailers createTransport
      //method, passing it an object containing the information needed to 
      //sign into the email.
      let transporter = nodemailer.createTransport({
        host: 'stmp.gmail.com',
        port: 587,
        service: 'gmail',
        secure: false,
        requireTLS: true,
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });

      let info = await transporter.sendMail({
        from: `OurDropzone <${EMAIL}>`,
        to: email,
        subject: 'Welcome to OurDropzone! Join the community of bada$$ humans who jump, party, and love!',
        text: 'Welcome to the #1 place for our family to come together to create a better safer more respected environment for us to do what we love.',
        html: `<div>Welcome to OurDropzone.com</div>
               <img src="cid:unique@nodemailer.com" />`,
        attachments: [
          {
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
          },
          {
            cid: 'unique@nodemailer.com',
            path: 'https://www.ramblers.com.au/wp-content/uploads/2019/04/P23-Angles-with-Mason-Drewy-MadDog-by-Smithy-19-april.jpg'
          }]
      }, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          res.status(200).send(info);
        }
      })
    } catch (err) {
      res.status(500).send(err);
    }
  }
}