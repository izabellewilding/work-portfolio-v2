import React from "react"
import Image from "./image"
import styled from "styled-components"
import SocialIcons from "../components/social-icons.js"

import Splash from "../assets/slash-nice.svg"
import BlobSplash from "../assets/slash-blob.svg"
import SplashMedium from "../assets/slash-medium.svg"
import SplashSmall from "../assets/splash-small.svg"

import Bird from "../assets/bird-green.svg"

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 1, 62, 0.5055894183845413) 29%,
    rgba(0, 13, 104, 0.15825048281031162) 59%,
    rgba(198, 204, 214, 0) 100%
  );
`

const LandingPage = () => {
  return (
    //landing page top
    <main className="gradient w-full h-screen relative items-center justify-center ">
      {" "}
      <div className="relative w-full h-screen">
        {" "}
        <Splash
          className=" absolute lightSVG bottom-0 splash "
          style={{ height: "35vh" }}
        />
        <SplashMedium
          className=" absolute bottom-0  lightSVG splash-med-left  invisible sm:visible"
          style={{ height: "50vh" }}
        />
        <Splash
          className=" absolute lightSVG top-0 splash2 "
          style={{ height: "35vh" }}
        />
        {/* <BlobSplash
          className=" absolute lightSVG blob-splash "
          style={{ height: "35vh" }}
        /> */}
        <SplashMedium className="h-screen absolute bottom-0 right-0 lightSVG" />
        {/* <SplashSmall
          className="h-screen absolute small-splash "
          style={{ height: "35vh" }}
        /> */}
      </div>{" "}
      {/* <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen"> */}{" "}
      {/* <Image
        src="../images/code-background.png"
        className="h-screen absolute bottom-0 right-0 top-0 left-0"
      />{" "} */}
      {/* <Splash
        className="h-screen absolute bottom-0 lightSVG "
        style={{ height: "65vh", left: "5%" }}
      /> */}
      <Bird className="absolute opacity-75 bird" />{" "}
      <div className=" absolute opacity-25 bottom-0 right-0 top-0 left-0" />
      <Gradient className="w-full h-full absolute bottom-0 right-0 top-0 left-0 " />
      {/* <div className="absolute top-0 w-full h-full bg-center bg-cover"> */}{" "}
      <div className=" w-full h-full absolute bottom-0 right-0 top-0 left-0">
        {" "}
        {/* hero text */}
        <div className="relative h-full w-full mx-auto items-center justify-center flex flex-col lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <h1 className=" mb-2 text-white text-5xl md:text-6xl uppercase test text-darkBlue">
            Izabelle Wilding
          </h1>{" "}
          <p className="quicksand text-2xl md:text-3xl text-white mb-6">
            Freelance Web Developer
          </p>{" "}
          <SocialIcons />
          <button
            class="absolute bottom-0 bg-transparent hover:bg-blue-500 text-blue-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  quicksand"
            style={{ bottom: "21%" }}
          >
            Click to See Projects
          </button>
        </div>{" "}
      </div>{" "}
      {/* </div>{" "} */}
      {/* </div> */}
    </main>
  )
}
export default LandingPage
