// import { SMTPClient } from 'emailjs';

// const client = new SMTPClient({
// 	user: 'user',
// 	password: 'password',
// 	host: 'smtp.your-email.com',
// 	ssl: true,
// });

// // send the message and get a callback with an error or details of the message that was sent
// client.send(
// 	{
// 		text: 'i hope this works',
// 		from: 'yadav.harshita22@vit.edu',
// 		to: 'tejas.hatedikar22@vit.edu',
// 		// cc: 'else <else@your-email.com>',
// 		subject: 'testing emailjs',
// 	},
// 	(err, message) => {
// 		console.log(err || message);
// 	}
// );

// import { SMTPClient } from 'emailjs';

// const client = new SMTPClient({
// 	user: 'yadav.harshita22@vit.edu',
// 	password: '12211430',
// 	host: 'smtp.vit.edu',
// 	ssl: true,
// });

// try {
// 	const message = await client.sendAsync({
// 		text: 'i hope this works',
// 		from: 'you <username@your-email.com>',
// 		to: 'someone <someone@your-email.com>, another <another@your-email.com>',
// 		cc: 'else <else@your-email.com>',
// 		subject: 'testing emailjs',
// 	});
// 	console.log(message);
// } catch (err) {
// 	console.error(err);
// }

// import

// const server = email.server.connect({
//   user: 'yadav.harshita22@vit.edu', // Your full email address
//   password: '12211430',     // Your email password or an application-specific password
//   host: 'smtp.vit.edu',               // SMTP server for vit.edu
//   ssl: true,                          // Use SSL for secure connection
// });

// server.send(
//   {
//     text: 'Hello, this is a test email.',
//     from: 'yadav.harshita22@vit.edu',   // Your full email address
//     to: 'harshita3028@gmail.com',           // Recipient's email address
//     subject: 'Test Email',
//   },
//   (err, message) => {
//     if (err) {
//       console.error('Error sending email:', err);
//     } else {
//       console.log('Email sent successfully:', message);
//     }
//   }
// );

// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const port = 3000; // Replace with your desired port number

// // Create a transporter with your SMTP settings
// const transporter = nodemailer.createTransport({
//   host: smtpServerIpAddress, // Replace with your email provider's SMTP server
//   port: 465, // Use the appropriate port for your email provider (465 for SSL)
//   secure: true, // Use SSL/TLS
//   auth: {
//     user: 'yadav.harshita22@vit.edu', // Your email address
//     pass: '12211430', // Your email password or app-specific password
//   },
// });

// // Example route to send an email
// app.get('/', (req, res) => {
//   const mailOptions = {
//     from: 'yadav.harshita22@vit.edu', // Sender's email address
//     to: 'harshita3028@gmail.com', // Recipient's email address
//     subject: 'Test Email',
//     text: 'Hello, this is a test email from Express.js and Nodemailer using the sender address yadav.harshita22@vit.edu.',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(200).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.send('Email sent successfully');
//     }
//   });
// });

// // Start your Express.js server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const port = 3000; // Replace with your desired port number

// // Create a transporter using Ethereal SMTP settings
// nodemailer.createTestAccount((err, account) => {
//   if (err) {
//     console.error('Error creating test account:', err);
//     return;
//   }

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587, // Use the Ethereal port
//     secure: false, // Do not use SSL/TLS
//     auth: {
//       user: account.user,
//       pass: account.pass,
//     },
//   });

//   // Example route to send an email
//   app.get('/', async (req, res) => {
//     const mailOptions = {
//       from: 'yadav.harshita22@vit.edu', // Your sender email address
//       to: 'harshita3792@gmail.com', // Recipient's email address
//       subject: 'Test Email',
//       text: 'Hello, this is a test email from Express.js and Nodemailer using Ethereal.',
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log('Email sent:', info.response);
//     console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

//     res.send('Email sent successfully');
//   });

//   // Start your Express.js server
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });

// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const port = 3000; // Replace with your desired port number

// // Create a transporter using Gmail SMTP settings
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'harshita3792@gmail.com', // Your Gmail address
//     pass: 'hlwbgqooftfbgroa', // Your Gmail password or app-specific password
//   },
// });

// // Example route to send an email to a Gmail address
// app.get('/', async (req, res) => {
//   const mailOptions = {
//     from: 'harshita3792@gmail.com', // Your Gmail address
//     to: 'yadav.harshita22@vit.edu', // Recipient's Gmail address
//     subject: 'Test Email',
//     text: 'Hello, this is a test email from Express.js and Nodemailer to a Gmail account.',
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);

//     console.log('Email sent:', info.response);
//     res.send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Error sending email');
//   }
// });

// // Start your Express.js server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// var nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yadav.harshita22@vit.edu',
    pass: '12211430'
  }
});

var mailOptions = {
  from: 'yadav.harshita22@vit.edu',
  to: 'harshita3792@gmail.com',
  subject: 'Hiiii',
  text: `Test in progress`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});