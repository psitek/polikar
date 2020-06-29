import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Offer from "../components/offer";
import Products from "../components/products";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Offer />
    <Products />
  </Layout>
);

export default IndexPage;
