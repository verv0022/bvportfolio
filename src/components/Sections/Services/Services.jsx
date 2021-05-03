import React from "react"
import styles from "./Services.module.css"
import Ux from "../../../images/Icons/ux.svg"
import Mobile from "../../../images/Icons/mobile.svg"
import Web from "../../../images/Icons/web.svg"
import Tilt from "react-parallax-tilt"

const Services = () => {
  return (
    <div className={styles.container} id="servicesSection">
      <div className={styles.content}>
        <h1 className={styles.title}>What I have to offer</h1>
        <div className={styles.servicesContainer}>
          <Tilt tiltMaxAngleX="6" tiltMaxAngleY="6">
            <section className={styles.service} id={styles.web}>
              <Web alt="Web Development" className={styles.icon} />
              <h2 className={styles.serviceTitle}>Web Development</h2>
              <ul className={styles.serviceList}>
                <li>Responsive Design</li>
                <li>Cross Browser Compatibility</li>
                <li>Mobile-first Approach</li>
                <li>Search Engine Optimization</li>
              </ul>
            </section>
          </Tilt>
          <Tilt tiltMaxAngleX="6" tiltMaxAngleY="6">
            <section className={styles.service} id={styles.mobile}>
              <Mobile alt="Mobile Development" className={styles.icon} />
              <h2 className={styles.serviceTitle}>Mobile Development</h2>
              <ul className={styles.serviceList}>
                <li>
                  Native Development <br />
                  (Swift, Kotlin)
                </li>
                <li>
                  Hybrid Development <br /> (React Native, Cordova)
                </li>
              </ul>
            </section>
          </Tilt>
          <Tilt tiltMaxAngleX="6" tiltMaxAngleY="6">
            <section className={styles.service} id={styles.ux}>
              <Ux alt="UX Design" className={styles.icon} />
              <h2 className={styles.serviceTitle}>UX Design</h2>
              <ul className={styles.serviceList}>
                <li>User Research</li>
                <li>Wireframes</li>
                <li>Prototyping</li>
                <li>Icons</li>
                <li>Logos</li>
              </ul>
            </section>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Services
