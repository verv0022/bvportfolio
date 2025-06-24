import React from "react"
import styles from "./About.module.css"
import AboutMeImage from "../../../images/Icons/dev.svg"
import BubbleBig from "../../../images/Icons/bubblebig.svg"
import BubbleMedium from "../../../images/Icons/bubblemedium.svg"
import BubbleSmall from "../../../images/Icons/bubblesmall.svg"
import { Parallax } from "react-scroll-parallax"
import smallTopWave from "../../../images/Backgrounds/topwave2.svg"
import smallBottomWave from "../../../images/Backgrounds/bottomwave2.svg"

const About = () => {
  return (
    <div className={styles.container} id="aboutSection">
      <img src={smallTopWave} className={styles.smallTopWave} alt="wave" />
      <img
        src={smallBottomWave}
        className={styles.smallBottomWave}
        alt="wave"
      />
      <div className={styles.content}>
        <Parallax
          className={`${styles.bubble} ${styles.right1}`}
          y={[-200, 200]}
          x={[-5, 5]}
          speed={-2}
        >
          <BubbleBig />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.right2}`}
          y={[-250, 450]}
          x={[10, -50]}
          speed={-1.5}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.right3}`}
          y={[-100, 100]}
          x={[10, -50]}
          speed={-1}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.center1}`}
          y={[-100, 100]}
          x={[-10, 10]}
          speed={-1.2}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.center2}`}
          y={[-80, 100]}
          x={[-10, 10]}
          speed={-1.1}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left1}`}
          y={[-300, 300]}
          x={[10, -10]}
          speed={-1.8}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left2}`}
          y={[-250, 250]}
          speed={-1.3}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left3}`}
          y={[-200, 200]}
          x={[-10, 30]}
          speed={-1.6}
        >
          <BubbleBig />
        </Parallax>
        <div className={styles.aboutMeContainer}>
          <div className={styles.aboutMeText}>
            <h1 className={styles.title}>About Me</h1>
            <p>
              I'm a developer with a strong focus on mobile and front-end
              technologies, specializing in native iOS and cross-platform
              applications. With over three years of experience, I've built
              accessible, user-focused solutions for government and freelance
              projects, turning thoughtful designs into clean, functional code.
              I place a strong emphasis on user experience and thrive at the
              intersection of design and development, always looking for
              challenges that blend creativity, usability, and problem solving.
            </p>
          </div>
          <AboutMeImage className={styles.aboutMeImage} />
        </div>
      </div>
    </div>
  )
}

export default About
