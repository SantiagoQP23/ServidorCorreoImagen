const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "santiagoquirumbay10@gmail.com", // generated ethereal user
    pass: "ptpnbakbuotwmkyi", // generated ethereal password
  },
});


transporter.verify().then(() => {
  //console.log("Listo para enviar correos");
});


module.exports = {
  transporter
}