// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Logo from "../assets/text-logo2.svg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex justify-between items-center py4 md:hidden">
      <div className="flex-shrink-0 ml-10 cursor-pointer">
        <Logo className=" h-10" />
      </div>
      <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
      <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
        <li className="mr-6 p-1 border-b-2 border-orange-500">
          <a className="text-blue-200 cursor-default" href="#">
            Home
          </a>
        </li>
        <li className="mr-6 p-1">
          <a className="text-white hover:text-blue-300" href="#">
            About
          </a>
        </li>
        <li className="mr-6 p-1">
          <a className="text-white hover:text-blue-300" href="#">
            Resources
          </a>
        </li>
        <li className="mr-6 p-1">
          <a className="text-white hover:text-blue-300" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
