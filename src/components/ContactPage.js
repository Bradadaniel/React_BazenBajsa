import React from 'react'
import './ContactPageStyle.css'

function ContactPage() {
  return (
    <div className="contact-page">
        <h1>Elérhetőség</h1>
        <div className="contact-container">
            <div className="contact-text">
                <h4>Telefon <span>+(381)61-27-666-05</span></h4>
                <h4>Email <span>bazenbajsa@gmail.com</span></h4>
                <h4><p>Cím: Mošorin, Bajša</p></h4>
            </div>
            <div className="contact-map">
            <iframe
                title="Google Maps"
                width="600"
                height="450"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4817.138196188851!2d19.578233524767324!3d45.776268545537924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4744ab9b8c52cda7%3A0xa55f9bcc265b800a!2sBazen!5e0!3m2!1shu!2srs!4v1710419809411!5m2!1shu!2srs"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
      ></iframe>
            </div>
        </div>
    </div>
  )
}
export default ContactPage;
