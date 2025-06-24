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
          y={[-480, 480]}
          x={[-40, 40]}
        >
          <BubbleBig />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.right2}`}
          y={[-360, 600]}
          x={[60, -80]}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.right3}`}
          y={[-240, 240]}
          x={[40, -120]}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.center1}`}
          y={[-300, 300]}
          x={[-60, 60]}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.center2}`}
          y={[-180, 300]}
          x={[-60, 60]}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left1}`}
          y={[-420, 420]}
          x={[50, -50]}
        >
          <BubbleMedium />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left2}`}
          y={[-300, 300]}
          x={[-30, 30]}
        >
          <BubbleSmall />
        </Parallax>
        <Parallax
          className={`${styles.bubble} ${styles.left3}`}
          y={[-360, 360]}
          x={[-50, 100]}
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
