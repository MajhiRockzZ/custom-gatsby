import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
// Icons
import DateIcon from "images/calendar.svg"
import TimeIcon from "images/watch.svg"
// Styles
import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  ReadingTimeWrapper,
} from "./BlogPostCard.styles"

const BlogPostCard = ({ slug, title, date, readingTime, excerpt, image }) => (
  <CardWrapper>
    <ImgWrapper>
      <Img fluid={image} />
    </ImgWrapper>
    <TextWrapper>
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
      <StatWrapper>
        <DateWrapper>
          <img src={DateIcon} alt="date" />
          {date}
        </DateWrapper>
        <ReadingTimeWrapper>
          <img src={TimeIcon} alt="time" />
          {readingTime}
        </ReadingTimeWrapper>
      </StatWrapper>
      <p>{excerpt}</p>
    </TextWrapper>
  </CardWrapper>
)

export default BlogPostCard
