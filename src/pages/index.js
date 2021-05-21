import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  // It's a external link?:
  // redirector by <a href='/externalLink' /> else <Link to='/internalLink' />
  // else
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>I'm Marília, a frontend developer living in Brazil.</h2>
        <p>
          Do you need a great developer? <Link to="/contact"> Contact me!</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
