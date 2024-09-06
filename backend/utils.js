const nodemailer = require('nodemailer');


// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Replace with your mail server host
  port: 465,                // Common port for SMTP
  secure: true,            // True for 465, false for other ports
  auth: {
    user: 'mnyrskyk@gmail.com',  // Your email address
    pass: process.env.EMAIL_PASS     // Your email password
  }
});

module.exports = {
    transporter
}