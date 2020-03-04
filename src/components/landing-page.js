import React from "react"
import Image from "./image"
import styled from "styled-components"
import SocialIcons from "../components/social-icons.js"

import Splash from "../assets/slash-nice.svg"
import BlobSplash from "../assets/slash-blob.svg"
import SplashMedium from "../assets/slash-medium.svg"
import SplashSmall from "../assets/splash-small.svg"
import Wave from "../assets/wave.svg"
import Bird from "../assets/bird-green.svg"
import MyLogo from "../assets/my-logo.svg"

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 1, 62, 0.5055894183845413) 29%,
    rgba(0, 13, 104, 0.15825048281031162) 59%,
    rgba(198, 204, 214, 0) 100%
  );
`

const LandingPage = props => {
  return (
    //landing page top
    <main
      {...props}
      className=" w-full h-screen relative items-center justify-center overflow-hidden "
    >
      {/* <Wave className="wave whiteSVG absolute bottom-0 left-0 right-0 z-10" />{" "} */}
      <div className="relative w-full h-screen">
        {" "}
        <SocialIcons />{" "}
        <Image
          src="../images/leafy-bg.jpg"
          className="object-cover h-screen"
        />{" "}
        {/* <Splash
          className="absolute lightSVG bottom-0 splash "
          style={{ height: "35vh" }}
        /> */}
        {/* <SplashMedium
          className=" absolute bottom-0  lightSVG splash-med-left  invisible sm:visible"
          style={{ height: "50vh" }}
        /> */}
        {/* <Splash
          className=" absolute lightSVG top-0 splash2 "
          style={{ height: "35vh" }}
        /> */}
        {/* <BlobSplash
          className=" absolute lightSVG blob-splash "
          style={{ height: "35vh" }}
        /> */}
        {/* <SplashMedium className="h-screen absolute bottom-0 right-0 lightSVG" /> */}
        {/* <SplashSmall
          className="h-screen absolute small-splash "
          style={{ height: "35vh" }}
        /> */}
      </div>{" "}
      {/* <Bird className="absolute opacity-75 bird" />{" "} */}
      <div className=" absolute opacity-25 bottom-0 right-0 top-0 left-0" />
      <Gradient className="w-full h-full absolute bottom-0 right-0 top-0 left-0 " />
      {/* <div className="absolute top-0 w-full h-full bg-center bg-cover"> */}{" "}
      <div className=" w-full h-full absolute bottom-0 right-0 top-0 left-0">
        {" "}
        {/* hero text */}
        <div className=" whitespace-no-wrap relative h-full w-full mx-auto items-center justify-center flex flex-col lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <h1 className="landing-heading relative text-lightPrimary text-5xl md:text-6xl uppercase barlow-cond text-lightPrimary leading-none">
            Izabelle Wilding
            <MyLogo className="landing-title-decoration absolute h-64" />
          </h1>{" "}
          <p className="landing-subheading quicksand text-2xl md:text-2xl text-lightPrimary uppercase">
            Freelance Web Developer
          </p>{" "}
          {/* <a
            href="#projects"
            class="z-20 invisible md:visible absolute bottom-0 bg-transparent hover:bg-orange-100 hover:text-gray-900 text-orange-100 font-semibold hover:text-white py-2 px-4 border border text-orange-100 hover:border-transparent rounded  quicksand"
            style={{ bottom: "20%" }}
            role="button"
          >
            Click to See Projects
          </a> */}
        </div>{" "}
      </div>{" "}
      {/* </div>{" "} */}
      {/* </div> */}
    </main>
  )
}
export default LandingPage
