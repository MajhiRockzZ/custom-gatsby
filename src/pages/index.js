import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "components/Layout"
import SEO from "components/SEO"
import Hero from "components/Hero"
import BlogPostCard from "components/BlogPostCard"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title
          return (
            <BlogPostCard
              key={i}
              slug="/"
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fluid}
            />
          )
        })}
      </main>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
