import React from "react"
import "../styles/theme.scss"
import "../styles/card-front.scss"
import "../styles/projects.scss"

const CardFront = ({ ...props }) => {
  return (
    <div className="card-front" {...props}>
      <div className="project-logo">{props.logo}</div>
    </div>
  )
}

export default CardFront
