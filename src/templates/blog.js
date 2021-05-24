import React from "react"
import Layout from "../components/layout"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            fluid(maxWidth: 1000) {
              src
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // Extraindo os dados da query injetados pelo
        const {
          title,
          fluid: { src },
        } = node.data.target

        return <img alt={title} src={src} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.content, options)}
    </Layout>
  )
}

export default Blog
