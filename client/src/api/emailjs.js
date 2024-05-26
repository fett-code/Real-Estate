import emailjs from '@emailjs/browser';

const sendEmail = async (toEmail, toName, subject, message) => {
    const templateParams = {
        to_email: toEmail,
        to_name: toName,
        subject: subject,
        message: message,
    };

    emailjs.send(String(import.meta.env.VITE_EMAILJS_SERVICE_NAME), String(import.meta.env.VITE_EMAILJS_TEMPLATE_NAME), templateParams, String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY))
    .then((result) => {
        return true;
    }, (error) => {
        return false;
    });
};

export default sendEmail;