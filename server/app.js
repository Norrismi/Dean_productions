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
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email_from,
                pass: sender_pass
            },
        });

        await transporter.sendMail({
            from: email_from,
            to: email_to,
            subject: 'New Submission from St. Hillaire Productions!',
            text: 'new submission',
            html: output,
        });



    }

    main().catch(console.error);
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))