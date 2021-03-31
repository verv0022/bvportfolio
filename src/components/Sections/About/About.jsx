import React from "react"
import styles from "./About.module.css"
import aboutMeImage from "../../../images/dev.svg"
import FadeInSection from "../../FadeInSection/FadeInSection"
import "./animate.css"

const About = () => {
  return (
    <div className={styles.container} id="aboutSection">
      <div className={styles.content}>
        <FadeInSection>
          <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeText}>
              <h1 className={styles.title}>About Me</h1>
              <p>
                Hello! My name is Brandon Vervoort. I'm a graduate from
                Algonquin College's{" "}
                <a
                  href="https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.collegeLink}
                >
                  Mobile Application Design & Development
                </a>{" "}
                program. I love the process of turning ideas into reality. I'm a
                perfectionist who loves building stuff for the web. I have a
                strong balance of creative and technical knowledge, a coder who
                loves design.
              </p>
              <br />
              <p>
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
              </ul>
              {/* <br />
              <p>In my spare time I love to snowboard, read, and game. </p> */}
            </div>
            <img
              className={styles.aboutMeImage}
              src={aboutMeImage}
              alt="logo"
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

export default About
