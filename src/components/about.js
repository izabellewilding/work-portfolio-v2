import React from "react"
import Image from "./image"
import WhatIDo from "../assets/what-i-do.svg"
import FloatingIcons from "./floating-icons"
const About = props => {
  return (
    <div
      {...props}
      className="relative w-full min-h-full flex flex-wrap items-center .bg-lightBlue"
    >
      {" "}
      <div className=" w-full md:w-5/12 px-4 mr-auto ml-auto">
        {" "}
        {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div> */}
        <h1 className="text-3xl text-darkPrimary pt-8 uppercase chivo">
          About Me
        </h1>
        {/* <WhatIDo className="pb-4 pt-4 h-24" /> */}
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"></p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          I hadn't always planned to become a web developer, but my love for
          language, solving complex problems, and art lead me here. As a
          developer, I can channel my combined knowledge and interests into
          building responsive, high performance, attractive UIs using HTML, CSS,
          and JavaScript.
        </p>
        <br />
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          Most of my websites are built with Gatby and React, but I'm always
          looking to expand my knowledge of frameworks and libraries. I spend a
          lot of my free time experimenting with Photoshop and Illustrator to
          convert my art and hand drawn images in SVGs for my sites.
        </p>
      </div>
      {/* <Image
            alt="..."
            src="../images/daiga-ellaby-h43VqtlnV7U-unsplash.jpg"
            className="w-full align-middle rounded-t-lg"
            style={{ maxHeight: "220px" }}
          /> */}
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="../images/adrien-converse-xzH7K6nVVgI-unsplash.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              I've recently started writing a front-end blog to reaffirm my
              knowledge and explore some of the interesting topics I've been
              learning about :-){" "}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
