const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')


const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const email_from = process.env.EMAIL_FROM;
const sender_pass = process.env.SENDER_PASS;
const email_to = process.env.EMAIL_TO;



app.post('/api/sendMail', (req, res) => {
    const output = `
    <p>You have a new submission</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Phone: ${req.body.phone}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p> ${req.body.message} </p> `;

    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email_from,
                pass: sender_pass
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: email_from,
            to: email_to,
            subject: 'New Submission from Dean Productions!',
            text: 'new submission',
            html: output,
        });

        console.log("Message sent: %s", info.messageId);
        
    }

    main().catch(console.error);
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))