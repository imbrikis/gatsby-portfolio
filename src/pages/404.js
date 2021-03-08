import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="404 Page" />
      <main className="error-page">
        <div className="error-container">
          <h1>You have reached... no where.... oh no!</h1>
          <Link to="/" className="btn">
            Let's go back Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
