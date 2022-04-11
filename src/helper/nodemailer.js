const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'joanny.senger14@ethereal.email',
        pass: 'Qx56R9KdpYqVevKRAk'
    }
});

const send = (info)=>{

    return new Promise(async(resolve, reject)=>{
        try {
            let result = await transporter.sendMail(info);
    
            console.log("Message sent: %s", result.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));     
            resolve(result);
        } catch (error) {
            console.log(error);            
        }
    })
}


const mailProcessor = ({email, pin, type})=>{
    let info = '';
    switch (type) {
        case 'request-new-pass':
            info = {
                from: '"CRM Head Admin👻" <joanny.senger14@ethereal.email>', // sender address
                to: email, // list of receivers
                subject: "Password reset pin", // Subject line
                text: "Your password reset pin:"+pin+"Pin will expire in 1d.", // plain text body
                html: `<b>Hello</b>
                    <b>${pin}</b>
                    This pin will expire in 1d.
                    <p></p>`, // html body
            }
            send(info);
            break;
        
        case 'pass-update':
            info = {
                from: '"CRM Head Admin👻" <joanny.senger14@ethereal.email>', // sender address
                to: email, // list of receivers
                subject: "Password updated!", // Subject line
                text: "Your new password has been updated!", // plain text body
                html: `<b>Hello</b>
                       <p>Your new password has been updated!</p>`, // html body
            }
            send(info);
        default:
            break;
    }

}

module.exports={
    mailProcessor
}