import { createTransport } from "nodemailer";

const CREDENCIALES_MAIL = {
    user: 'sessaregoluchi7@gmail.com',
    pass: 'bewclugwuhyunktd'
}

class EmailService{
    #clientNodemailer

    constructor(credenciales){
        this.#clientNodemailer = createTransport({
            service: "gmail",
            //port: 587,
            auth: credenciales
        })
    }

    async sendMail(destinatario, mensaje){
        const mailConfig = {
            from: "sessaregoluchi7@gmail.com",
            to: destinatario,
            subject: "Contacto para Trabajo",
            text: mensaje
        }
        try {
            const info = await this.#clientNodemailer.sendMail(mailConfig)
            return info
        } catch (error) {
            console.log("error al mandar el mail a: sessaregoluchi@gmail.com")
        }
    }
}

export const emailService = new EmailService(CREDENCIALES_MAIL)