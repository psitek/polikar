import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Offer from "../components/offer"
import About from "../components/about"
import Products from "../components/products"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Offer />
  </Layout>
)

export default IndexPage
