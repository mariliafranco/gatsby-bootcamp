import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1> About me </h1>
      <h2> Marília Franco de Andrade: A frontend developer</h2>
      <p>Working at Venturus since June of 2020</p>
      See how you can find me by clicking <Link to="/contact">here</Link>
    </Layout>
  )
}

export default AboutPage
