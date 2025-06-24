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
        <Parallax
          className={`${styles.bubble} ${styles.right1}`}
          y={[-600, 600]}
          x={[-40, 40]}
        >
          <BubbleBig />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.right2}`}
          y={[-450, 750]}
          x={[60, -80]}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.right3}`}
          y={[-300, 300]}
          x={[40, -120]}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.center2}`}
          y={[-240, 360]}
          x={[-60, 60]}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left1}`}
          y={[-540, 540]}
          x={[50, -50]}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left2}`}
          y={[-420, 420]}
          x={[-30, 30]}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left3}`}
          y={[-480, 480]}
          x={[-50, 100]}
        >
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
