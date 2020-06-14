import React from "react"
import { Link } from "gatsby"

const Menu = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link to={item.link} activeClassName="active">
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
)

export default Menu
