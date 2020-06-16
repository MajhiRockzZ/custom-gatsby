import React from "react"
import { graphql } from "gatsby"
// Components
import Layout from "components/Layout"
import Image from "components/Image"
import SEO from "components/SEO"

const Post = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
      <main>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
