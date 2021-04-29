import React from "react"
import styles from "./Footer.module.css"
import pdf from "../../images/Icons/pdf.svg"
import linkedin from "../../images/Icons/linkedin.svg"
import github from "../../images/Icons/github.svg"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.copyright}>
          &copy; Brandon Vervoort {new Date().getFullYear()} | All Rights
          Reserved
        </h3>
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
    </footer>
  )
}

export default Footer
