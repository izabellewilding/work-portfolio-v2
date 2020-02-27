import React from "react"

const About = props => {
  return (
    <div {...props} className="w-full min-h-full flex flex-wrap items-center">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div> */}
        <h3 className="text-3xl mb-2 font-semibold leading-normal">About Me</h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          As a lover of language, solving complex problems and writing about
          difficult concepts, I chose to study Linguistics at university. Even
          though I loved the challenge and enjoyed about learning the science of
          language, I felt like my love for art and creating was being
          supressed.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          Until I discovered web development! As a developer I can combine and
          channel my talents into building responsive, high performance
          websites, with attractive UIs, using HTML, CSS and JavaScript.
          <br />
          Most of my websites are built with Gatby and React, but I'm always
          looking to expand my knowledge of frameworks and libraries. I spend a
          lot of my free time experimenting with Photoshop and Illustrator to
          convert my art and hand drawn images in SVGs for my sites.
        </p>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px",
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-pink-600 pinkSVG"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">Check out my Blog</h4>
            <p className="text-md font-light mt-2 text-white">
              I've recently started writing a front-end blog to reaffirm my
              knowledge and explore some of the interesting topics I've been
              learning about. Maybe you could learn something from reading them
              :-)
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default About
