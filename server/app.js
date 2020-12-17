const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer')


const app = express()

const email_from = process.env.EMAIL_FROM;
const sender_pass = process.env.SENDER_PASS;
const email_to = process.env.EMAIL_TO;


// View engine setup
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('contact', { layout: false })
})

app.post('/send', (req, res) => {
    const output = `
    <p>You have a new submission</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Company: ${req.body.company}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
   
    </ul>
    <h3>Message</h3>
    <p> ${req.body.message} </p> `;

    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
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
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        res.render('contact', { layout: false, msg: 'Message has been sent!' })
    }

    main().catch(console.error);
})

app.listen(3000, () => console.log('Server started...'))