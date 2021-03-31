import React from "react"
import styles from "./Services.module.css"
import ux from "../../../images/Icons/ux.svg"
import mobile from "../../../images/Icons/mobile.svg"
import web from "../../../images/Icons/web.svg"

const Services = () => {
  return (
    <div className={styles.container} id="servicesSection">
      <div className={styles.content}>
        <h1 className={styles.title}>What I have to offer</h1>
        <div className={styles.servicesContainer}>
          <section className={styles.service}>
            <img src={web} alt="Web Development" className={styles.icon} />
            <h2 className={styles.serviceTitle}>Web Development</h2>

            <h3>Responsive Design</h3>
          </section>
          <section className={styles.service}>
            <img
              src={mobile}
              alt="Mobile Development"
              className={styles.icon}
            />
            <h2 className={styles.serviceTitle}>Mobile Development</h2>
            <h3>Native Development</h3> <h3> Hybrid Development</h3>
          </section>
          <section className={styles.service}>
            <img
              src={ux}
              alt="UX Design"
              className={styles.icon}
              height="80px"
            />
            <h2 className={styles.serviceTitle}>UX Design</h2>
            <h3>User Research</h3>
            <h3>Wireframes</h3>
            <h3>Prototyping</h3>
            <h3>Icons</h3>
            <h3>Logos</h3>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Services
