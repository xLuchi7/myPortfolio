import React from "react";
import { useEffect } from "react";
import './style.css';
import Swal from "sweetalert2";
//import { emailService } from "../../services/emailService";
import emailjs from "emailjs-com"

const DivContactMe = () => {

    useEffect(() => {
        const formSendEmail = document.getElementById("sendEmailForm")
        const userEmail = document.getElementById("emailDirectionInput")
        const userMessage = document.getElementById("emailMessageTextArea")

        formSendEmail.onsubmit = (e) => {
            e.preventDefault()
            const validateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
            let isValid = true
            if(!validateEmail.test(userEmail.value)){
                isValid = false
                Swal.fire({
                    icon: 'warning',
                    title: 'Enter a valid Email adress',
                })
            }
            if(userMessage.value === ""){
                isValid = false
                Swal.fire({
                    icon: 'warning',
                    title: 'All fields must me completed',
                })
            }
            if (isValid === true){
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent',
                    text: 'You will reciebe a response in the coming hours at: '+userEmail.value
                })
                //const stringMessage = userEmail.value + " "+userMessage.value
                //emailService.sendMail("sessaregoluchi@gmail.com", stringMessage)
                emailjs.sendForm(
                    "service_cdhjane", 
                    "template_3040anr", 
                    e.target, 
                    'fa-JHrqRxntJRiCRL'
                ).then(res=> {
                    console.log(res)
                }).catch(err=> console.log(err))
            }
        }
    })

    return(
        <div className="contactMeContent">
            <h1 className="contactMeTitle">Contact Me</h1>
            <div className="myContactInfoContainer">
                <p className="myContactInfoText">
                    I am open to freelance projects and part-time positions. You can reach me anytime for further details or opportunities.
                    </p>
                <div className="emailDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-check-fill myContactInfoIcon" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                    </svg>
                    <p className="emailDirection">sessaregoluchi@gmail.com</p>
                </div>
                <div className="phoneDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-phone-fill phoneIcon" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                    </svg>
                    <p className="phoneNumber">+54 11 3210-1982</p>
                </div>
            </div>
            <div className="sendEmailContainer">
                <h4 className="sendEmailText">Send me an Email</h4>
                <form action="" id="sendEmailForm">
                    <input placeholder="Your Email" name="name" type="text" id="emailDirectionInput" />
                    <textarea id="emailMessageTextArea" name="message" placeholder="Message" ></textarea>
                    <div>
                        <button id="btnSendEmail"type="submit">Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DivContactMe