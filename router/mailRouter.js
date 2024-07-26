const mailRouter = require("express").Router() 
const nodemailer = require('nodemailer');

mailRouter.post('/send', (req, res) => {
    const { name, email, comment } = req.body;

    console.log('Received data:', { name, email, comment });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Portfolio Comment',
        text: `Name: ${name}\nEmail: ${email}\nComment: ${comment}`
    };

    console.log('Sending email with options:', mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.send('Email sent: ' + info.response);
    });
});

module.exports = mailRouter