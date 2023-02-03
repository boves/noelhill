// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Script } from 'gatsby'
import { navigate } from 'gatsby-link'
import {
    name,
    email,
    subject,
    message,
    formGroup
    
} from '../components/layout.module.css'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

// Step 2: Define your component
const NHICS = () => {
    return (
        <Layout pageTitle="Irish Concertina School">
            <h2>West Coast, 2023</h2>
            <p>August 6–11 August. Tilikum Retreat Center, Newburg, OR.</p>
            <h2>East Coast, 2023</h2>
            <p>July 23-28 July. McGrath’s, East Durham, NY. </p>
        </Layout>
    )
}
export const Head = () => <Seo title= "Irish Concertina School" />

// Step 3: Export your component
export default NHICS
