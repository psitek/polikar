import React from "react"
import List from "./list"
import printingPressImg from "../images/printing-press.jpg"

const About = () => {
  return (
    <section className="container relative mx-auto mb-10 text-gray-800 sm:px-0">
      <div class="">
        <img class="h-56 w-full object-cover" src={printingPressImg} alt="" />
      </div>
      <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6">
        <div class=""></div>
        <div class="text-base max-w-prose mx-auto"></div>

        <h3
          id="offer"
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Oferta
        </h3>

        <List />
      </div>
    </section>
  )
}

export default About
