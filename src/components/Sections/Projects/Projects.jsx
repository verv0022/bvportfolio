import React from "react"
import styles from "./Projects.module.css"
import ProjectCard from "./ProjectCard"
import { graphql, useStaticQuery } from "gatsby"
import bottomWave from "../../../images/Backgrounds/bottomwave.svg"
import topWave from "../../../images/Backgrounds/topwave.svg"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            id
            name
            description
            example
            slideshow
            source
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges
  return (
    <div className={styles.container} id="projectsSection">
      <img src={bottomWave} className={styles.bottomWave} alt="wave" />
      <img src={topWave} className={styles.topWave} alt="wave" />
      <div className={styles.content}>
        <h1 className={styles.title}>Some projects I've worked on</h1>
        {projects.map(({ node: project }) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              imageData={project.image.childImageSharp.fluid}
              example={project.example}
              source={project.source}
              slideshow={project.slideshow}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
