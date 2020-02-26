import React from "react"
import "../styles/card-front.scss"
import "../styles/projects.scss"

const CardFront = ({ ...props }) => {
  return (
    <div
      className="card-front"
      {...props}
      // style={{
      //   border: "solid black 1px",
      // }}
    >
      <div className="project-logo">{props.logo}</div>
    </div>
  )
}

export default CardFront
