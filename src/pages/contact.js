import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1> Email: </h1> <p> marilia.andrad@gmail.com</p>
      <h1> Telefone: </h1> <p> (19) 99652-7795</p>
      <p>
        {" "}
        If you prefer, you can also find out more about me on my{" "}
        <a href="https://github.com/mariliafranco" target="_blank">
          {" "}
          GitHub
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
