import React from "react"
import Div100vh from "react-div-100vh"
import styles from "./Landing.module.css"
import pdf from "../../../images/Icons/pdf.svg"
import linkedin from "../../../images/Icons/linkedin.svg"
import github from "../../../images/Icons/github.svg"

const Landing = () => {
  return (
    <Div100vh className={styles.container} id="landingSection">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.heroTitle}>
            <h1 className={styles.hello}>HELLO</h1>
            <h1 className={styles.name}>I'M BRANDON</h1>
            <p className={styles.title}>web and mobile developer</p>
          </div>
          <div className={styles.line}>&nbsp;</div>
          <div className={styles.icons}>
            <a
              href={`https://drive.google.com/file/d/1FmxXusgEP5FxRaCSuPgrO0tFM0UD53tA/view?usp=sharing`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pdf} alt="Resume" className={styles.icon} />
            </a>
            <a
              href={`https://github.com/verv0022`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" className={styles.icon} />
            </a>
            <a
              href={`https://www.linkedin.com/in/brandonwv/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </Div100vh>
  )
}

export default Landing
