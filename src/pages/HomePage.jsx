import Hero from '../components/home-page/Hero.jsx'
import About from '../components/home-page/About.jsx'
import OurProcess from '../components/home-page/OurProcess.jsx'
import FeaturedProjects from '../components/home-page/FeaturedProjects.jsx'
import ClientTestimonials from '../components/home-page/ClientTestimonials.jsx'
import CallToAction from '../components/home-page/CallToAction.jsx'
import { useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
// import { metaData } from '../assets/simulateCMS.js' // Replace with CMS
import GlobalContext from "../context/GlobalContext.jsx"


function HomePage() {
  const { getFields } = useContext(GlobalContext)
  const [ content, setContent ] = useState({
    metaData: {
      home: {
        title: "",
        description: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: ""
      }
    }
  })
  const { metaData } = content

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
    getFields('metaData')
    .then( data => { setContent(data) } )

    window.addEventListener('resize', trackWindowSize)
    return () => {
      window.removeEventListener('resize', trackWindowSize)
    }
  }, [windowWidth])

  // SEO metadata
  const rawBaseUrl = window.location.origin
  const baseUrl = rawBaseUrl.replace(/\/+$/, "")
  const fullPath = baseUrl + window.location.pathname

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return (
    <>
      {/* metadata */}
      <Helmet>
        <title>{metaData.home.title}</title>
        <meta name="description" content={metaData.home.description} />
        <link rel="canonical" href={fullPath} />

        <meta property="og:title" content={metaData.home.ogTitle} />
        <meta property="og:description" content={metaData.home.ogDescription} />
        <meta property="og:image" content={metaData.home.ogImage} />
        <meta property="og:url" content={fullPath} />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="min-h-[100vh]">
        <Hero />
        <About />
        <OurProcess />
        <ClientTestimonials />
        <FeaturedProjects key={crypto.randomUUID()} screenSize={windowWidth} />
        <CallToAction />
      </main>
    </>
  );
}

export default HomePage
