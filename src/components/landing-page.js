import React from "react"
import Image from "./image"

import styled from "styled-components"
import Bird from "../assets/bird-green.svg"

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 11, 103, 1) 0%,
    rgba(0, 40, 93, 1) 0%,
    rgba(0, 49, 118, 0.6064297545189952) 43%,
    rgba(255, 255, 255, 0) 100%
  );
`

const Container = props => (
  <div class="w-full bg-gra relatvie">{props.children}</div>
)

const LandingPage = () => {
  return (
    <Container>
      {" "}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        {" "}
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={
            {
              // backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            }
          }
        >
          {/* <Image
            src="../images/code-background.png"
            className="w-full h-full absolute bottom-0 right-0 top-0 left-0"
          /> */}
          <div className="gradient w-full h-full relatvie">
            <Gradient className="w-full h-full absolute bottom-0 right-0 top-0 left-0 " />
            <Bird
              className="absolute opacity-75 bird"
              style={{ height: "22rem" }}
            />
            {/* middle section */}
            <div className="container h-full w-full relative mx-auto items-center justify-center flex flex-col">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="mb-8 text-white font-semibold text-4xl md:text-5xl pt-10">
                  <p className="">Hi, I'm Izzy.</p>
                  <p className="serif-pro">A Freelance Web Developer</p>
                </h1>
              </div>{" "}
              <button class="bg-transparent hover:bg-blue-500 text-blue-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                See my Projects
              </button>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </Container>
  )
}
export default LandingPage
