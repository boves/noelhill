// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const NHICS= () => {
    return (
        <Layout pageTitle="Noel Hill Irish Conertina School">
            <p>
                Hi there! I'm Daiv. I made this site to learn how to 
                make new sites from scratch using Gatsby.
            </p>
            <p>
                This is going to be a different page in the final website.
            </p>
        </Layout>
    )
}
export const Head = () => <Seo title= "Irish Concertina School" />

// Step 3: Export your component
export default NHICS
