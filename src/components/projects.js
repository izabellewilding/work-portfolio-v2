import React, { useState } from "react"

import "../styles/card-back.scss"
import "../styles/card-flip.css"
import "../styles/card-front.scss"
import "../styles/all.scss"

import CardFront from "./card-front"
import CardBack from "./card-back"
import ElecLogo from "../assets/alex-wilding-logo.svg"
import FoodBlogLogo from "../assets/bitoffood-underlined.svg"
// import Arrow from "../assets/arrow4-black.svg"

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
      <section className="projects pb-20 -mt-24">
        {" "}
        <Card
          cardFront={
            <CardFront
              logo={<FoodBlogLogo />}
              style={{
                backgroundColor: "#18132a",
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
                backgroundColor: "#18132a",
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
              style={{ backgroundColor: "#18132a" }}
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
        {/* </article> */}
      </section>
    </main>
  )
}

export default Projects
