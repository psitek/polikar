import React from "react"
import bannerImg from "../images/products/poligrafia-banner.png"
import cennikImg from "../images/products/poligrafia-cennik.png"

const Hero = () => (
  <>
    <div className="absolute w-full origin-center shadow-md -z-10 bg-blue-gradient h-100 sm:h-76 skew" />
    <section className="container relative mx-auto text-white sm:px-0">
      <div className="relative w-10/12 px-4 pt-20 lg:pl-20 sm:pt-28 md:pt-28">
        <h1 className="font-bold xs:pt-8">
          Wieloletnie doświadczenie w branży poligraficznej
          <span className="inline-block text-xl font-normal font-sm">
            pozwala nam zapewnić Państwu usługi najwyższej jakości.
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row">
          <button type="button" className="w-32 mb-3 btn btn-yellow sm:m-0">
            Oferta
          </button>
          <button type="button" className="w-32 sm:ml-4 btn">
            Kontakt
          </button>
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
