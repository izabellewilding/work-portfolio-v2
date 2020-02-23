import React from "react"
import styled from "styled-components"
import Bird from "../assets/bird-green.svg"

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(20, 107, 165, 1) 48%,
    rgba(44, 152, 179, 1) 100%
  );
`

const Container = props => <div class="w-full bg-gra">{props.children}</div>

const LandingPage = () => {
  return (
    <Container>
      <Gradient class="w-full ">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen"
          style={{
            minHeight: "75vh",
          }}
        >
          {" "}
          <Bird className="absolute bottom-0 right-0 opacity-50 " />
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={
              {
                // backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
              }
            }
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-25 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="mb-8 text-white font-semibold text-3xl md:text-5xl">
                    Hi, I'm Izabelle.
                    <br />A Freelance Frontend Web Developer
                  </h1>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    See my Projects
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </Gradient>
    </Container>
  )
}
export default LandingPage
