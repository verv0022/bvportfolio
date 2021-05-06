import React from "react"
import styles from "./About.module.css"
import AboutMeImage from "../../../images/Icons/dev.svg"

const About = () => {
  return (
    <div className={styles.container} id="aboutSection">
      <div className={styles.content}>
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
              well as design principles. I then worked with a team on a voice
              assistant for the Canadian Border Service Agency that helps users
              get border rules and regulations hands-free.
            </p>
          </div>
          <AboutMeImage className={styles.aboutMeImage} />
        </div>
      </div>
    </div>
  )
}

export default About
