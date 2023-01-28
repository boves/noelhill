// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { hero } from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <p>Mollit fugiat veniam anim culpa amet.</p>
      <p>Proident ea minim cillum excepteur cupidatat et. Aute irure do esse adipisicing.</p>
      <StaticImage
        alt="Noel Hill, holding a concertina, looking off to the side in front of a chalkboard with music notes."
        src = "../images/Noel-Hill010_md.jpg"
        className={hero}
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title ="Home Page" />

// Step 3: Export your component
export default IndexPage
