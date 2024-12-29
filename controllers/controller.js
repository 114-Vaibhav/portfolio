const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

///transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
)






const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body;
        if (!name || !email || !msg) {
            return res.status(200).send({
                success: false,
                message: "Please provide all fields"
            })
        }
        // email matter
        transporter.sendMail({
            to: 'vg9400313@outlook.com',
            from: 'vg9400313@outlook.com',
            subject: 'Regarding Portfolio',
            html: `
            <h5>Detail Information</h5>
            <ul>
            <li><p>Name : ${name}</p> </li>
            <li><p>Email : ${email}</p> </li>
            <li><p>Message : ${msg}</p> </li>
            </ul>
            `
        })

        console.log("sendEmailController invoked"); // Added console log
        return res.status(200).send({
            success: true,
            message: "Your Message Sent Successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'send email api error',
            error,
        });
    }
};

module.exports = { sendEmailController };
