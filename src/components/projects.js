import React, { useState } from "react"

import "../styles/projects.scss"
import "../styles/card-flip.css"
import "../styles/card-front.scss"

import CardFront from "./card-front"
import CardBack from "./card-back"
import ElecLogo from "../assets/alex-wilding-logo.svg"
import FoodBlogLogo from "../assets/bitoffood-underlined.svg"
import Arrow from "../assets/arrow4-black.svg"

const Card = ({ cardFront, cardBack }) => {
  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">{cardFront}</div>
        <div className="back">{cardBack}</div>
      </div>
    </div>
  )
}

const Projects = ({ ...props }) => {
  return (
    <main className="project-section">
      <header className="projects-title-wrapper">
        <h1 className="page-title">My Projects</h1>
        <Arrow className="arrow" />
      </header>
      <article className="projects">
        {" "}
        <Card
          cardFront={
            <CardFront
              logo={<FoodBlogLogo />}
              style={{
                backgroundColor: "#d7ffff",
              }}
            />
          }
          cardBack={
            <CardBack
              listItem1="Search bar made with Elasticlunr"
              listItem2="Blog/recipe pages with React and Markdown"
              listItem3="Custom RMWC components"
              style={
                {
                  // backgroundImage: `url(${cardImg1})`,
                  // backgroundColor: "white",
                }
              }
              gitLink="https://github.com/izabellewilding/gatsby-recipe-blog"
              siteLink="https://abitoffood.netlify.com/"
              cardImage="../images/card2-img.png"
              cardTitle="Food recipe blog"
            />
          }
        />{" "}
        <Card
          cardFront={
            <CardFront
              style={{
                backgroundColor: "rgb(24, 19, 42)",
                fontFamily: "europa",
              }}
              logo={"Artist Photograph & Art Gallery"}
            />
          }
          cardBack={
            <CardBack
              listItem1="Live photostream with Flickr API"
              listItem2="Responsive image carousel"
              listItem3="Page slide transition using React Router"
              // style={{
              //   backgroundColor: "white",
              // }}
              gitLink="https://github.com/izabellewilding/flickr_API_artist_stream"
              siteLink="https://flickr-api-gallery.netlify.com/#/"
              cardImage="../images/card1-img"
              cardTitle="Flickr Image Gallery"
            />
          }
        />
        <Card
          cardFront={
            <CardFront
              style={{ backgroundColor: "rgb(0, 36, 81)" }}
              logo={<ElecLogo />}
            />
          }
          cardBack={
            <CardBack
              cardImage="../images/card3-img"
              listItem1="Small business website"
              listItem2="Optimised for SEO with targeted keyword strategy"
              listItem3="Animated bespoke SVG icon nav bar"
              siteLink="https://www.alexwildingelectricalservices.com/"
              gitLink="https://github.com/izabellewilding/website-for-electrician"
              cardTitle="Small business website"
            />
          }
        />
      </article>
    </main>
  )
}

export default Projects
