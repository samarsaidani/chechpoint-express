const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
   user: "",
   pass: ''
  },
    tls: {
        ciphers:'SSLv3'
    },
    logger: true,
    debug: true
 })


  const mailOptions = {
      from :'',
          to : 'samsaidani5@gmail.com',
          subject : 'email ' ,
          text : '  '
 };

 transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error in sending email  ' + error);
    return true;
  } else {
   console.log('Email sent: ' + info.response);
   return false;
  }
 })