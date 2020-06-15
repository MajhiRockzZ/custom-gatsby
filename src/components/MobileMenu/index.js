import React from "react"
import { Link } from "gatsby"
// Styles
const MobileMenu = ({ menuOpen, items }) => (
  <>
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={item.link} activeClassName="active">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
)

export default MobileMenu
