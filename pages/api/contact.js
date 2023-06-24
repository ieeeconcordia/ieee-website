import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { recipient, subject, message } = req.body;

    // Create a transporter with your email provider's SMTP configuration
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "burnerwebmaster@gmail.com",
        pass: "urner123",
      },
      secure: true,
    });

    const mailOptions = {
      from: "burnerwebmaster@gmail.com",
      to: "webmaster@ieeeconcordia.ca",
      subject: subject,
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.log("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
