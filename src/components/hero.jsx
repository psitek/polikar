import React from "react"
import { Link } from "gatsby"
import bannerImg from "../images/products/poligrafia-banner.png"
import cennikImg from "../images/products/poligrafia-cennik.png"

const Hero = () => (
  <>
    <div className="absolute w-full origin-center shadow-md -z-10 bg-blue-gradient h-100 sm:h-76 skew" />
    <section className="container relative mx-auto text-white sm:px-0">
      <div className="relative w-10/12 px-4 pt-8 sm:pt-20 lg:pt-24 lg:pl-20 sm:pt-28 md:pt-28">
        <h1 className="font-bold lg:w-8/12">
          Biegła znajomość poligrafii
          <span className="inline-block text-xl font-normal font-sm">
            Wieloletnie doświadczenie w branży poligraficznej pozwala nam
            zapewnić Państwu usługi najwyższej jakości.
          </span>
        </h1>
        <div className="relative z-10 flex flex-col sm:flex-row">
          <Link to="#offer">
            <button
              type="button"
              className="w-32 mb-3 hover:bg-yellow-600 btn btn-yellow sm:m-0"
            >
              Oferta
            </button>
          </Link>
          <Link to="#footer">
            <button
              type="button"
              className="w-32 hover:bg-yellow-600 sm:ml-4 btn"
            >
              Kontakt
            </button>
          </Link>
        </div>
      </div>
      <div className="relative flex justify-around w-full -top-20 md:justify-end">
        <div className="flex items-end h-64">
          <img className="w-auto h-40" src={cennikImg} alt="" />
        </div>
        <div>
          <img className="w-auto h-96" src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  </>
)

export default Hero
