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
        <Parallax className="bubble right1" y={[-200, 200]} x={[-5, 5]}>
          <BubbleBig />
        </Parallax>
        <Parallax className="bubble right2" y={[-250, 450]} x={[10, -50]}>
          <BubbleSmall />
        </Parallax>
        <Parallax className="bubble right3" y={[-100, 100]} x={[10, -50]}>
          <BubbleMedium />
        </Parallax>
        <Parallax className="bubble center1" y={[-100, 100]} x={[-10, 10]}>
          <BubbleMedium />
        </Parallax>
        <Parallax className="bubble center2" y={[-80, 100]} x={[-10, 10]}>
          <BubbleSmall />
        </Parallax>
        <Parallax className="bubble left1" y={[-300, 300]} x={[10, -10]}>
          <BubbleMedium />
        </Parallax>
        <Parallax className="bubble left2" y={[-250, 250]}>
          <BubbleSmall />
        </Parallax>
        <Parallax className="bubble left3" y={[-200, 200]} x={[-10, 30]}>
          <BubbleBig />
        </Parallax>
        <div className={styles.aboutMeContainer}>
          <div className={styles.aboutMeText}>
            <h1 className={styles.title}>About Me</h1>
            <p>
              Hello! My name is Brandon Vervoort. I’m a perfectionist who loves
              turning ideas into reality. To do this my main tool is JavaScript
              and its frame-works such as React but JavaScript isn't the only
              tool I use, I know my way around Photoshop, Illustrator, and
              prototyping tools such as XD and Figma. I have a strong balance of
              creative and technical knowledge, I’m a coder who loves design.
            </p>
            <br />
            <p>
              I graduated from the{" "}
              <a
                href="https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.collegeLink}
              >
                Mobile Application Design & Development
              </a>{" "}
              program at Algonquin College in Ottawa. During my studies I
              learned full-stack development of web and mobile applications as
              well as design principles. I then worked on a team to develop a
              voice assistant for the Canadian Border Service Agency that helps
              users get border rules and regulations hands-free.
            </p>
          </div>
          <AboutMeImage className={styles.aboutMeImage} />
        </div>
      </div>
    </div>
  )
}

export default About
