import "../../layout.css"

import React, { useState, useRef, useEffect } from "react"

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false)

  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true)
        observer.unobserve(domRef.current)
      }
    })
    const current = domRef.current
    observer.observe(current)
    return () => observer.unobserve(current)
  }, [])

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  )
}
export default FadeInSection
