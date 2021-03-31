import React, { useState } from "react"
import Landing from "../components/Sections/Landing/Landing"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Backdrop from "../components/Backdrop/Backdrop"
import About from "../components/Sections/About/About"
import Projects from "../components/Sections/Projects/Projects"
import Services from "../components/Sections/Services/Services"
import Contact from "../components/Sections/Contact/Contact"
import Footer from "../components/Footer/Footer"
import "../layout.css"

const IndexPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <SEO title="Home" />
      <Header toggle={toggle} isSidebarOpen={isSidebarOpen} />
      <Sidebar show={isSidebarOpen} hide={toggle} />
      {isSidebarOpen ? <Backdrop click={toggle} /> : null}
      <Landing />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
export default IndexPage
