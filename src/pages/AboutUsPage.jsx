import Hero from "../components/about-us-page/Hero"
import WhoWeAre from "../components/about-us-page/WhoWeAre"
import ClientLogos from "../components/about-us-page/ClientLogos"
import MediaFrame from "../components/about-us-page/MediaFrame"
import Founder from "../components/about-us-page/Founder"
import OurValues from "../components/about-us-page/OurValues"
import WhatWeDo from "../components/about-us-page/WhatWeDo"
import CallToAction from "../components/home-page/CallToAction"
// import { metaData } from '../assets/simulateCMS.js' // Replace with CMS
import { useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import GlobalContext from "../context/GlobalContext.jsx"


function AboutUsPage() {
  const { getFields } = useContext(GlobalContext)
  const [ content, setContent ] = useState({
    metaData: {
      about: {
        title: "",
        description: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: ""
      }
    }
  })
  const { metaData } = content

  useEffect(() => {
    getFields('metaData')
    .then( data => { setContent(data) } )
  }, [])
  
  // SEO metadata
  const rawBaseUrl = window.location.origin
  const baseUrl = rawBaseUrl.replace(/\/+$/, "")
  const fullPath = baseUrl + window.location.pathname
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl},
      {"@type": "ListItem", "position": 2, "name": "About", "item": `${baseUrl}/about-us`}
    ]
  }

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return<>
  {/* SEO metadata */}
  <Helmet>
    <title>{metaData.about.title}</title>
    <meta name="description" content={metaData.about.description} />
    <link rel="canonical" href={fullPath} />

    <meta property="og:title" content={metaData.about.ogTitle} />
    <meta property="og:description" content={metaData.about.ogDescription} />
    <meta property="og:image" content={metaData.about.ogImage} />
    <meta property="og:url" content={fullPath} />
    <meta property="og:type" content="website" />

    <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
  </Helmet>
  <main className='flex-grow min-h-[100vh]'>
    <Hero />
    <ClientLogos />
    <WhoWeAre />
    <MediaFrame />
    <Founder />
    <OurValues />
    <WhatWeDo />
    <CallToAction />
  </main>
  </>
}

export default AboutUsPage
