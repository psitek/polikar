import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import polikarLogo from "../images/polikar-logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="container px-4 mx-auto mt-2 mb-8 sm:mb-0">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Nova+Flat:400|Karma:400|Montserrat:wght@100;400;600;700" />
      </Helmet>
      <div className="flex justify-between sm:justify-start align-items">
        <img className="w-40 md:w-56" src={polikarLogo} alt="Polikar logo" />
        <nav className="flex items-center ml-8 md:w-5/12">
          <div
            className={`${menuOpen ? "z-0" : "z-10"} block lg:hidden relative`}
          >
            <button
              className="flex items-center justify-center w-10 h-8 mr-2 border-2 rounded md:hidden text-brandBlue border-brandBlue hover:text-gray-700 hover:border-gray-700"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "opacity-100" : "opacity-0"
            } md:opacity-100 absolute md:relative px-4 w-full right-0 top-4 transition-opacity duration-100 ease-in md:p-0 `}
          >
            <div className="container">
              <div className="flex justify-between mt-24 text-left bg-white rounded shadow md:bg-transparent md:border-none md:shadow-none md:flex-row md:mt-0">
                <ul className="flex flex-col py-4 pt-4 ml-8 md:flex-row md:p-0 md:m-0 md:w-full md:justify-between">
                  <li className="w-20 py-2 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
                    Oferta
                  </li>
                  <li className="w-20 py-2 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
                    O nas
                  </li>
                  <li className="w-20 py-2 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
                    Kontakt
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-8 mt-4 mr-2 border-2 rounded border-brandBlue text-brandBlue hover:text-brandBlue hover:border-brandBlue md:hidden"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
