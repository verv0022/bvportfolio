import React from "react"
import Img from "gatsby-image"
import styles from "./Projects.module.css"
import Tilt from "react-parallax-tilt"
import { AiOutlineGithub } from "react-icons/ai"
import { IoOpenOutline } from "react-icons/io5"
import { BiSlideshow } from "react-icons/bi"

const ProjectCard = ({
  name,
  imageData,
  description,
  example,
  source,
  slideshow,
}) => {
  const SourceIcon = () => (
    <div>
      <a
        href={source}
        className={styles.icons}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub className={styles.icon} />
      </a>
      <h2 className={styles.iconLabel}>Source</h2>
    </div>
  )

  const ExampleIcon = () => (
    <div>
      <a
        href={example}
        className={styles.icons}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoOpenOutline className={styles.icon} />
      </a>
      <h2 className={styles.iconLabel}>Example</h2>
    </div>
  )

  const SlideshowIcon = () => (
    <div>
      <a
        href={slideshow}
        className={styles.icons}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiSlideshow className={styles.icon} />
      </a>
      <h2 className={styles.iconLabel}>Slideshow</h2>
    </div>
  )

  return (
    <Tilt tiltMaxAngleX="6" tiltMaxAngleY="6">
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Img className={styles.cardImage} fluid={imageData} alt={name} />
        </div>
        <div className={styles.cardContent}>
          <h1 className={styles.cardTitle}>{name}</h1>
          <p className={styles.cardDescription}>{description}</p>

          <div className={styles.mobileIcons}>
            {example ? <ExampleIcon /> : null}
            {source ? <SourceIcon /> : null}
            {slideshow ? <SlideshowIcon /> : null}
          </div>
        </div>
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {example ? <ExampleIcon /> : null}
            {source ? <SourceIcon /> : null}
            {slideshow ? <SlideshowIcon /> : null}
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default ProjectCard
