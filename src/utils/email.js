const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  console.log("Hi");
  console.log(email,subject,text);    
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.USER,
          pass: process.env.PASS
      }
  });
  let mailDetails = {
    from: process.env.USER,
    to: email,
    subject: subject,
    text: text
};
    
    await transporter.sendMail(mailDetails);
    //console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;
