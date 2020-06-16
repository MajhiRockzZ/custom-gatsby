import React from "react"
import { Link } from "gatsby"
// Icons
import LeftIcon from "images/arrow-left.svg"
import RightIcon from "images/arrow-right.svg"
// Styles

const PageNavigation = ({ currentPage, numPages }) => (
  <div>
    <div>
      {currentPage > 1 && (
        <Link to={`/${currentPage === 2 ? "" : currentPage - 1}`}>
          <input type="image" alt="left-nav" src={LeftIcon} />
        </Link>
      )}
    </div>
    <div>
      <p>
        {currentPage} / {numPages}
      </p>
    </div>
    <div>
      {currentPage !== numPages && (
        <Link to={`/${currentPage + 1}`}>
          <input type="image" alt="right-nav" src={RightIcon} />
        </Link>
      )}
    </div>
  </div>
)

export default PageNavigation
