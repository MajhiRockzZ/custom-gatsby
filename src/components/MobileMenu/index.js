import React from "react"
import { Link } from "gatsby"
// Styles
import { OverrideGlobalStyle, Wrapper, Nav } from "./MobileMenu.styles"

const MobileMenu = ({ menuOpen, items }) => (
  <>
    <OverrideGlobalStyle menuOpen={menuOpen} />
    <Wrapper menuOpen={menuOpen}>
      <Nav>
        {items.map(item => (
          <li key={item.id}>
            <Link to={item.link} activeClassName="active">
              {item.name}
            </Link>
          </li>
        ))}
      </Nav>
    </Wrapper>
  </>
)

export default MobileMenu
