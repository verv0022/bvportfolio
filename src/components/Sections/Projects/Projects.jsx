import React from "react"
import styles from "./Projects.module.css"
import ProjectCard from "./ProjectCard"
import { graphql, useStaticQuery } from "gatsby"

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
