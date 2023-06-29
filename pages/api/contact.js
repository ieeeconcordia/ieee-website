import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, request, message } = req.body;
    console.log(request);

    // Defining where the email gets sent depending on the topic
    var emailTo = "info@ieeeconcordia.ca";
    if (request == "IT") emailTo = "itdirector@ieeeconcordia.ca";
    if (request == "Lab related") emailTo = "services@ieeeconcordia.ca";
    if (request == "Projects") emailTo = "projects@ieeeconcordia.ca";
    if (request == "Academics") emailTo = "academics@ieeeconcordia.ca";
    if (request == "Competitions") emailTo = "competitions@ieeeconcordia.ca";

    const msg = {
      to: "webmaster@ieeeconcordia.ca", // Change to your recipient
      from: "no-reply@ieeeconcordia.ca", // Change to your verified sender
      subject: "Ticket: " + subject,
      html: `
      <head>
        <title>New Support Ticket</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #dddddd;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #333333;
          }
          .message {
            margin-bottom: 20px;
          }
          .message p {
            color: #333333;
            line-height: 1.5;
          }
          .ticket-details {
            margin-bottom: 20px;
          }
          .ticket-details p {
            color: #555555;
            line-height: 1.5;
            margin: 0;
          }
          .button-container {
            text-align: center;
          }
          .button {
            display: inline-block;
            background-color: #4285f4;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Ticket!</h1>
          </div>
          <div class="message">
            <p>Hey Guys!,</p>
            <p>A new ticket has been submitted. Here are the details:</p>
          </div>
          <div class="ticket-details">
            <p><strong>Submitted By:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Description:</strong> ${message}</p>
            <p><strong>Category:</strong> ${request}</p>
          </div>
          <div class="message">
            <p>Please take the necessary action and provide a timely response to the user!  </p>
            <p>Thank you!</p>
          </div>
        </div>
      </body>
      </html>`,
    };
    try {
      await sendgrid.send(msg);
      console.log("Email sent");
      res.status(200).json({ msg: "Email sent successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Failed to send email." });
    }
  }
}
