import React from "react"
import { Helmet } from "react-helmet"
import polikarLogo from "../images/polikar-logo.png"

const Header = () => {
  return (
    <header className="container relative z-10 px-4 mx-auto mt-2 mb-8 sm:mb-0">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Nova+Flat:400|Karma:400|Montserrat:wght@100;400;600;700" />
      </Helmet>
      <div className="flex justify-between sm:justify-start align-items">
        <img className="w-40 md:w-56" src={polikarLogo} alt="Polikar logo" />
      </div>
    </header>
  )
}

export default Header
