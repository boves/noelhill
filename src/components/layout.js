import * as React from 'react'
import { Link, useStaticQuery,graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from '../components/layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        } 
    `)
    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                        Home
                    </Link>
                </li>
                {/* <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>
                        About
                    </Link>
                </li> */}
                {/* <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkText}>
                        Blog
                    </Link>
                </li> */}
                <li className={navLinkItem}>
                    <Link to="/nhics" className={navLinkText}>
                        Irish Concertina School
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/contact" className={navLinkText}>
                        Contact
                    </Link>
                </li>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
