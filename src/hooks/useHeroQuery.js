import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      markdownRemark(frontmatter: { type: { eq: "hero" } }) {
        frontmatter {
          heroImage {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroImageBtnLink
          heroImageBtnText
          heroImageText
        }
      }
    }
  `)

  return data.markdownRemark.frontmatter
}
