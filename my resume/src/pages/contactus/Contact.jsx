import React, { useRef, useState } from 'react';
import './contact.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hs4nxf9',   // 🔹 from EmailJS
        'template_e9unvuh',  // 🔹 from EmailJS
        form.current,
        'GtQxoP7mrB46Zb4ZG'    // 🔹 from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully!");
          setIsSent(true);
          e.target.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to Send Message");
        }
      );
  };

  return (
    <>
      <div className="contact">
        <div className="conthead">
          <h1>Contact Me</h1>
          <div className="line2"></div>
          <p>I'd love to hear from you - reach out for any questions!</p>
        </div>
        <div className="formmain">
          <div className="form">
            <div className="contact-container">
              <h2>Contact Me</h2>
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Write your message..." rows="5" required></textarea>
                </div>

                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Contact;
