import emailJs from "@emailjs/browser";

function sendEmail({from_name, from_email, message} : {from_name: string, from_email: string, message: string}) {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    return emailJs.send(serviceId ?? "", templateId ?? "", {from_name, from_email, message}, userId)
}

export default sendEmail;