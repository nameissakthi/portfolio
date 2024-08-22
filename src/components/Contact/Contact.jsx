import "./Contact.css";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8uqtqtc", "template_7pa51hl", form.current, {
        publicKey: "G4ZUYlLooYNQKCEsW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email Send Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Sorry, Got Some Error");
        }
      );
  };

  return (
    <div className="contact_main">
      <p>
        Lets <span>Connect</span>
      </p>
      <div className="contact">
        <div className="contact_left">
          <h1>Send a Mail</h1>
          <div className="contact_mail_box">
            <h1>Email</h1>
            <h4>svel7252@gmail.com</h4>
            <a href="mailto:svel7252@gmail.com">
              <button class="button">
                Write
                <div class="arrow">›</div>
              </button>
            </a>
          </div>
        </div>
        <div className="contact_right">
          <h1>Send a Quick Message</h1>
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="contact__form-input"
              placeholder="Type your name"
              required
            />
            <input
              type="email"
              name="from_email"
              className="contact__form-input"
              placeholder="Type your email"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Type your message..."
              required
            ></textarea>

            <button href="#contact" className="form_btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
