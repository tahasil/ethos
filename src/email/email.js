const nodemailer = require("nodemailer");

exports.sendEmail = async (name, email,source) => {
    let response = {
        status: false,
        message: "",
    }
    const subject = source === 'contact' 
    ? 'Contact Us Request - Aethos Org Website' 
    : 'Join Us Request - Aethos Org Website';

    try
    {
        let transporter = nodemailer.createTransport({
            host: "email-smtp.ap-south-1.amazonaws.com",
            port: "465",
            secure: true,
            auth:{
                user: "AKIAWOWBPAHY7MBYEYF7",
                pass: "BAk4HxPmqVC8YY0t9+7Cz/pMg+fRcppQvSn7N6jh0RZX",
            }, 
        });

        let mailOptions = {
            from: "codeninjas@aiolos.solutions",
            to: "danish.k@aiolos.cloud,sam@rohi.com,sam@aethos.org",
            // to: "danish.k@aiolos.cloud,askari@aiolos.solutions",
            subject: subject,
            text: `\nName: ${name}\nEmail: ${email}`,
        };
        let info = await transporter.sendMail(mailOptions);
        let sendMailResponse = info && info.response ? info.response : "Send Email Error";
        console.log("Email Sent => ", info.response);
        response = {
            ...response,
            status: true,
            message: sendMailResponse, 
        };
        return response;
    }
    catch(err)
    {
        console.log("Email Sent Error - Try Catch => ",err.message);
        response = {
            ...response,
            status: false,
            message: err.message, 
        };
        return response;
    }
};