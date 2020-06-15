import React from "react"

// Components
import Layout from "components/Layout"
import SEO from "components/SEO"
import Hero from "components/Hero"
import BlogPostCard from "components/BlogPostCard"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <BlogPostCard />
      </main>
    </Layout>
  )
}

export default IndexPage
