import React from "react"
// Styles

const BGImage = ({ fluid, title, className, children }) => (
  <div>
    <div>FakeBG Component</div>
    <div className={className}>{children}</div>
  </div>
)

export default BGImage
