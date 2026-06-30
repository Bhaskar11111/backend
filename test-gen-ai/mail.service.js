require('dotenv').config()
const nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        type:'OAUTH2',
        user:process.env.GOOGLE_USER,
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        refreshToken:process.env.GOOGLE_REFRESH_TOKEN
    }
})

transporter.verify()
.then(()=>
{
    console.log('Transported verified')
})

const sendEmail=(async({to,subject,html,text=""})=>
{
    try{
         const mailOptions = {
            from:process.env.GOOGLE_USER,
            to,
            subject,
            text,
            html
    }

    const details=await transporter.sendMail(mailOptions)
    console.log("Email sent successfully",+to)
}
catch(err){
    console.error(err)
    throw err;
}
})

module.exports=sendEmail