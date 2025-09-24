import Hero from "../components/about-us-page/Hero"
import WhoWeAre from "../components/about-us-page/WhoWeAre"
import ClientLogos from "../components/about-us-page/ClientLogos"
import MediaFrame from "../components/about-us-page/MediaFrame"
import Founder from "../components/about-us-page/Founder"
import OurValues from "../components/about-us-page/OurValues"
import WhatWeDo from "../components/about-us-page/WhatWeDo"
import CallToAction from "../components/home-page/CallToAction"
import { Helmet } from "react-helmet-async"
import { metaData } from "../assets/simulateCMS" // Replace with CMS


function AboutUsPage() {
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
