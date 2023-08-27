import React, {  useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the email using EmailJS
        emailjs.sendForm("service_1w316lk", "template_kl663ws", e.target, "f4Ykz6iIzYZKgTyvL")
            .then((response) => {
                console.log("Email sent:", response.text);
                setSubmitted(true)
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };
    return (
        <div className="contact-form" id="contact">
            
            <div className="title">
                <div className="awesome">

                    {/* <span >Get in Touch </span> */}
                    <span>Contact me</span>
                    {/* <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div> */}
                </div>
            </div>

            
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <button className="button">Submit</button>
                    {submitted && <span> Thanks for Contacting me</span>}
                    <div
                        className="blur c-blur1"

                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact