import React from "react"
import { Link } from "gatsby"
// Component
import BGImage from "components/BGImage"
// Hooks
import { useHeroQuery } from "hooks/useHeroQuery"
// Styles

const Hero = () => {
  const {
    heroImage,
    heroImageText,
    heroImageBtnText,
    heroImageBtnLink,
  } = useHeroQuery()
  console.log(heroImage)

  return (
    <div>
      <BGImage title="heroImage" fluid={heroImage.childImageSharp.fluid}>
        <div>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </div>
      </BGImage>
    </div>
  )
}

export default Hero
