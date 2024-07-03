const Email = require("../../models/Email");
const config = require("../../configs/app");
const nodemailer = require('nodemailer');
const Mailgen = require('Mailgen');
const { ErrorBadRequest } = require("../../configs/errorMethods");

const configMail = {
    host: config.mailHost,
    port: config.mailPort,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: config.mailUser,
        pass: config.mailPass,
    },
};

const mailMessage = (mailTo, subject, template) => {
    let messageMail = {
        from: `"HANKYU HANSHIN INQUIRY" <${config.mailDefault}>`,
        to: mailTo,
        subject: subject,
        html: template,
    }
    return messageMail;
}

let MailGenerator = new Mailgen({
    theme: 'salted',
    product: {
        name: 'HANKYU HANSHIN',
        link: 'https://mailgen.js/'// this can be change according to your requirement
    }
});

const methods = {
    async storeContact(data) {
        try {
            const obj = new Email(data);
            const inserted = await obj.save();
            return inserted;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async sendEmail(req) {
        let response = {
            body: {
                intro: 'You Have Inquiry From Website !',
                table: [
                    {
                        // Optionally, add a title to each table.
                        title: req.body.subject,
                        data: [
                            {
                                '#': 'Name',
                                detail: req.body.contactName,
                            },
                            {
                                '#': 'Company',
                                detail: req.body.companyName,
                            },
                            {
                                '#': 'Email',
                                detail: req.body.email,
                            },
                            {
                                '#': 'Telephone',
                                detail: req.body.telephone,
                            },
                            {
                                '#': 'Details',
                                detail: req.body.detail,
                            },
                        ],
                        columns: {
                            // Optionally, customize the column widths
                            customWidth: {
                                '#': '25%',
                                detail: '75%'
                            },
                            // Optionally, change column text alignment
                            customAlignment: {
                                detail: 'left'
                            }
                        }
                    },
                ]
            }
        };
        
        let mail = MailGenerator.generate(response);

        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport(configMail);
            transporter.sendMail(mailMessage(req.body.email, req.body.subject, mail), async (error, info) => {
                if (error) {
                    reject(ErrorBadRequest(error.message));
                }
                else {
                    await methods.storeContact(req.body);
                    resolve(info.envelope);
                }
            });
        });
    },
};

module.exports = { ...methods };
