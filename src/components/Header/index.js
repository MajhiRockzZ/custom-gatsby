import React from "react"
import { Link } from "gatsby"

// Hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery()
  return (
    <div>
      <Link to="/">
        <img src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
    </div>
  )
}

export default Header
