/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../style.css"
import "../styles/all.scss"
import "../styles/gradient.scss"
import "../styles/floating-icons.scss"
import "../styles/social-icons.scss"

import Header from "./header"
import LandingPage from "./landing-page"
import Projects from "../components/projects.js"
import Footer from "../components/footer.js"
import About from "../components/about.js"
// import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="scrolling-box">
        <Header />
        <LandingPage id="1" />
        <Projects id="projects" />
        <About id="about" />
        <Footer />
      </div>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
