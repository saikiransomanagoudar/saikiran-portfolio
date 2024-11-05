const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please fill all the fields!" });
  }
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "saikiransomanagoudar@gmail.com",
      pass: "nfkc unxv gtjg wjuv",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "saikiransomanagoudar@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
        
        <h3>Sender Information</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}<p/>
        `,
  };
  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error) {
        console.log("Error while sending email:", error);
        return res
          .status(400)
          .json({ msg: "Error sending email. Please try again later." });
      }
      return res
        .status(200)
        .json({ msg: "Thank you for contacting Saikiran!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;