// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <p>Welcome to my Gatsby site!</p>
      <p>This is going to be a site for Noel Hill, but for now, I'm starting with a template.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src = "../images/clifford.jpg"
        
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title ="Home Page" />

// Step 3: Export your component
export default IndexPage
