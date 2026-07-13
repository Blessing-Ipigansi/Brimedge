import { Outlet } from 'react-router-dom';
import Header from '../components/global/Header.jsx'
import Footer from '../components/global/Footer.jsx'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect, useContext } from 'react'
// import { contact } from '../assets/simulateCMS.js' // Replace with CMS
// import { logo } from '../assets/simulateCMS.js' // Replace with CMS
import GlobalContext from "../context/GlobalContext.jsx"

function MainLayout() {
  const { getFields } = useContext(GlobalContext)
  const [ content, setContent ] = useState({
    contact: {
      socialMediaHandles: {
        facebook: "/",
        x: "/",
        instagram: "/",
        linkedIn: "/"
      }
    },
    logo: {
      brimedgeLogoLight: "/"
    }
  })
  const { contact, logo } = content
  // metadata
  const baseUrl = window.location.origin
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brimedge",
    "url": baseUrl,
    "logo": logo.brimedgeLogoLight,
    "sameAs": [
      contact.socialMediaHandles.facebook,
      contact.socialMediaHandles.x,
      contact.socialMediaHandles.instagram,
      contact.socialMediaHandles.linkedIn
    ]
  }
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": baseUrl,
    "name": "Brimedge"
  }
  
  useEffect(() => {
    getFields('contact', 'logo')
    .then( data => { setContent(data) } )
  }, [])

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return <>
    {/* metadata */}
    <Helmet>
      <link rel="icon" type="image/svg+xml" href="/brimedgeFavicon.png" />
      <link rel="me" href={contact.socialMediaHandles.facebook} />
      <link rel="me" href={contact.socialMediaHandles.x} />
      <link rel="me" href={contact.socialMediaHandles.instagram} />
      <link rel="me" href={contact.socialMediaHandles.linkedIn} />

      <script type="application/ld+json">{JSON.stringify(orgData)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteData)}</script>
    </Helmet>
    <div id="page-top"></div>
    <Header />
    <Outlet />
    <Footer />
  </>
}

export default MainLayout
