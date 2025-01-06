import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MY_EMAIL, 
    pass: process.env.APP_PASSWORD, 
  },
});

const sendEmail = async (email) => {
  try {
    const info = await transporter.sendMail({
      from: '"Abdul Rafay"',
      to: email, 
      subject: "Register Succesfull TO THE ECOMMERCE WEB ✔", 
      text: "Successfully register to the ecommerce app", 
      html: "<b>Successfully register</b>", 
    });

    return { message: `Message sent: ${info.messageId}` };
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
};
export { sendEmail };
