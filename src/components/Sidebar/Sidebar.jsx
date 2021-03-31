import React from "react"
import "./Sidebar.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Sidebar = props => {
  let sidebarClasses = "sidebar"
  if (props.show) {
    sidebarClasses = "sidebar show"
  }

  return (
    <nav className={sidebarClasses}>
      <ul>
        <li>
          <AnchorLink
            href="#landingSection"
            offset="0"
            className="nav-link dark"
            onClick={props.hide}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#aboutSection"
            offset="0"
            className="nav-link dark"
            onClick={props.hide}
          >
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#projectsSection"
            offset="0"
            className="nav-link dark"
            onClick={props.hide}
          >
            Work
          </AnchorLink>
        </li>

        <li>
          <AnchorLink
            href="#contactSection"
            offset="0"
            className="nav-link dark"
            onClick={props.hide}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
