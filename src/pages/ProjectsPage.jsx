import CallToAction2 from "../components/global/CallToAction2"
import CardsHolder from "../components/projects-page/CardsHolder"
import { Helmet } from "react-helmet-async"
import { metaData } from "../assets/simulateCMS" // Replace with CMS
import { useState, useEffect } from "react"

function ProjectsPage() {
  const screenSize = () => {
    let w = window.innerWidth // 768 1024

    if (w >= 1024) {
      return 'lg'
    } else if (w >= 768) {
      return 'md'
    } else return 'sm'
  }
  const [windowWidth, setWindowWidth] = useState(screenSize)

  const trackWindowSize = () => {
    let w = window.innerWidth // 768 1024

    if (w >= 1024) {
      setWindowWidth('lg')
    } else if (w >= 768) {
      setWindowWidth('md')
    } else setWindowWidth('sm')
  }

  useEffect(() => {
    window.addEventListener('resize', trackWindowSize)

    return () => {
      window.removeEventListener('resize', trackWindowSize)
    }
  }, [windowWidth])

  // SEO metadata
  const rawBaseUrl = window.location.origin
  const baseUrl = rawBaseUrl.replace(/\/+$/, "")
  const fullPath = baseUrl + window.location.pathname
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl},
      {"@type": "ListItem", "position": 2, "name": "Projects", "item": `${baseUrl}/projects`}
    ]
  }

  return (
    <>
      <Helmet>
        <title>{metaData.projects.title}</title>
        <meta name="description" content={metaData.projects.description} />
        <link rel="canonical" href={fullPath} />

        <meta property="og:title" content={metaData.projects.ogTitle} />
        <meta
          property="og:description"
          content={metaData.projects.ogDescription}
        />
        <meta property="og:image" content={metaData.projects.ogImage} />
        <meta property="og:url" content={fullPath} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>
      <main id="projects-page" className="flex-grow min-h-[100vh]">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-[1600px] mx-auto px-2 md:px-4 lg:px-10 pb-16">
            <CardsHolder screenSize={windowWidth} />
            <CallToAction2 page="/projects" />
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectsPage
