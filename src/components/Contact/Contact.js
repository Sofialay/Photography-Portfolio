import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div>
            <div className="contact-input">
                <input type="text" placeholder="Fullname"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Message"/>
            </div>
            <button>
                Send!
            </button>
        </div>
    )
}

export default Contact;
