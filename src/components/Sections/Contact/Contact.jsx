import React from "react"
import styles from "./Contact.module.css"
import ContactMe from "../../../images/Icons/contactme.svg"

const Contact = () => (
  <div className={styles.container} id="contactSection">
    <div className={styles.content}>
      <h1 className={styles.title}>Let's get in touch! </h1>
      <div className={styles.contactContainer}>
        <ContactMe alt="Contact Me Image" className={styles.contactMeImage} />
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact-form" />
          <div className={styles.field}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Smith"
              className={styles.textInput}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="youremail@domain"
              className={styles.textInput}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Your Message"
            />
          </div>
          <div className={styles.actions}>
            <button type="submit" className="special" id={styles.submit}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Contact
