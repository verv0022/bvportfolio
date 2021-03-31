import React from "react"
import Headroom from "react-headroom"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styles from "./Header.module.css"
import logo from "../../images/Logos/bv-logo-light.png"
import { Spin as Hamburger } from "hamburger-react"

const Header = props => {
  return (
    <Headroom
      wrapperStyle={{ position: "fixed", zIndex: "100" }}
      style={{
        background: "#141414",
        boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
        margin: "0",
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flexEnd",
        alignItems: "center",
        height: "40px",
        position: "fixed",
      }}
      className={styles.headerWrapper}
    >
      <AnchorLink href="#landingSection" offset="0">
        <img className={styles.logo} src={logo} alt="logo" />
      </AnchorLink>
      <div className={styles.navigation}>
        <AnchorLink
          href="#landingSection"
          offset="0"
          className="nav-link light"
        >
          Home
        </AnchorLink>
        <AnchorLink
          href="#aboutSection"
          offset="100px"
          className="nav-link light"
        >
          About
        </AnchorLink>
        <AnchorLink
          href="#projectsSection"
          offset="-200px"
          className="nav-link light"
        >
          Work
        </AnchorLink>
        <AnchorLink
          href="#contactSection"
          offset="0"
          className="nav-link light"
        >
          Contact
        </AnchorLink>
      </div>
      <Hamburger
        className={styles.hamburgerReact}
        toggle={props.toggle}
        toggled={props.isSidebarOpen}
        color="#f7f7f7"
        label="Show sidebar"
        rounded
      />
    </Headroom>
  )
}

export default Header
