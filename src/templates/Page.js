import React from "react"
import { graphql } from "gatsby"
// Components
import Layout from "components/Layout"
import Image from "components/Image"
import SEO from "components/SEO"

const Page = ({ data }) => {
  const page = data.markdownRemark

  return (
    <Layout>
      <SEO title={page.frontmatter.title} />
      <Image fluid={page.frontmatter.image.childImageSharp.fluid} />
      <main>
        <h2>{page.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </main>
    </Layout>
  )
}

export default Page

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
