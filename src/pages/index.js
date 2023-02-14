// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { hero } from '../components/layout.module.css'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <h2>West Coast, 2023</h2>
      <p>August 6–11. Tilikum Retreat Center, Newburg, OR. Click <Link to="/nhics">here</Link> to request more info.</p>
      <h2>East Coast, 2023</h2>
      <p>July 23-28. McGrath’s, East Durham, NY. Click <Link to="/nhics">here</Link> to request more info.</p>
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
