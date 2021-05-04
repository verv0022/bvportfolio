import React from "react"
import styles from "./Footer.module.css"
import Pdf from "../../images/Icons/pdf.svg"
import LinkedIn from "../../images/Icons/linkedin.svg"
import Github from "../../images/Icons/github.svg"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.spacer}>&nbsp;</div>
        <div className={styles.copyright}>
          &copy; Brandon Vervoort {new Date().getFullYear()} | All Rights
          Reserved
        </div>
        <div className={styles.icons}>
          <a
            href={`https://drive.google.com/file/d/1FmxXusgEP5FxRaCSuPgrO0tFM0UD53tA/view?usp=sharing`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Pdf alt="Resume" className={styles.icon} />
          </a>
          <a
            href={`https://github.com/verv0022`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github alt="Github" className={styles.icon} />
          </a>
          <a
            href={`https://www.linkedin.com/in/brandonwv/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn alt="LinkedIn" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
