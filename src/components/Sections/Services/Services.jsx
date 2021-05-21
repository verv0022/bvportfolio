import React from "react"
import styles from "./Services.module.css"
import Ux from "../../../images/Icons/ux.svg"
import Mobile from "../../../images/Icons/mobile.svg"
import Web from "../../../images/Icons/web.svg"
import Tilt from "react-parallax-tilt"
import BubbleBig from "../../../images/Icons/bubblebig.svg"
import BubbleMedium from "../../../images/Icons/bubblemedium.svg"
import BubbleSmall from "../../../images/Icons/bubblesmall.svg"
import smallTopWave from "../../../images/Backgrounds/topwave2.svg"
import smallBottomWave from "../../../images/Backgrounds/bottomwave2.svg"
import { Parallax } from "react-scroll-parallax"

const Services = () => {
  return (
    <div className={styles.container} id="servicesSection">
      <img src={smallTopWave} className={styles.smallTopWave} alt="wave" />
      <img
        src={smallBottomWave}
        className={styles.smallBottomWave}
        alt="wave"
      />
      <div className={styles.content}>
        <Parallax className="bubble right1" y={[-200, 200]} x={[-5, 5]}>
          <BubbleBig />
        </Parallax>
        <Parallax className="bubble right2" y={[-250, 450]} x={[10, -50]}>
          <BubbleSmall />
        </Parallax>
        <Parallax className="bubble right3" y={[-100, 100]} x={[10, -50]}>
          <BubbleMedium />
        </Parallax>
        <Parallax className="bubble center2" y={[-80, 100]} x={[-10, 10]}>
          <BubbleSmall />
        </Parallax>
        <Parallax className="bubble left1" y={[-250, 250]} x={[10, -10]}>
          <BubbleMedium />
        </Parallax>
        <Parallax className="bubble left2" y={[-200, 200]}>
          <BubbleSmall />
        </Parallax>
        <Parallax className="bubble left3" y={[-150, 150]} x={[-10, 30]}>
          <BubbleBig />
        </Parallax>
        <h1 className={styles.title}>What I have to offer</h1>
        <div className={styles.servicesContainer}>
          <Tilt tiltMaxAngleX="10" tiltMaxAngleY="10">
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
          <Tilt tiltMaxAngleX="10" tiltMaxAngleY="10">
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
          <Tilt tiltMaxAngleX="10" tiltMaxAngleY="10">
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
