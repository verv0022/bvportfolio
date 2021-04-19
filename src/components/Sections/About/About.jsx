import React from "react"
import styles from "./About.module.css"
import aboutMeImage from "../../../images/dev.svg"
import FadeInSection from "../../FadeInSection/FadeInSection"

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
              and its frame-works such as React but it is not the only tool I
              use. I know my way around Photoshop, Illustrator, and prototyping
              tools such as XD and Figma. I have a strong balance of creative
              and technical knowledge, I’m a coder who loves design.
              {/* <a
                  href="https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.collegeLink}
                >
                  Mobile Application Design & Development
                </a>{" "} */}
            </p>
            <br />
            <p>
              Hello! My name is Brandon Vervoort. I’m a perfectionist who loves
              turning ideas into reality. To do this my main tool is JavaScript
              and its frame-works such as React but it is not the only tool I
              use. I know my way around Photoshop, Illustrator, and prototyping
              tools such as XD and Figma. I have a strong balance of creative
              and technical knowledge, I’m a coder who loves design.
            </p>
            {/* <p>
                I specialize in front-end development of web and mobile
                applications. Some recent technologies I've been using are:
              </p>
              <ul className={styles.skillList}>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Firebase</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Graphql</li>
                <li>Bootstrap 4</li>
                <li>Nodejs</li>
              </ul> */}
          </div>
          <img className={styles.aboutMeImage} src={aboutMeImage} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default About
