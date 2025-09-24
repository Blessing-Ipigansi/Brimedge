import { HashLink } from 'react-router-hash-link'
// import { homeAbout } from '../../assets/simulateCMS' // Replace with redux
import { useContext, useState, useEffect, useRef } from 'react'
import HomeContext from "../../context/HomeContext.jsx";

function About() {
  const { getFields } = useContext(HomeContext)
  const [ content, setContent ] = useState({ isLoading: true })
  const {homeAboutHeading1, homeAboutP1, homeAboutP2, homeAboutBtnText, homeAboutImg} = content
  const [inView, setInView] = useState(false)
  const mainRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(( [entry] ) => {
      if (entry.isIntersecting) setInView(true)
    }, { root: null, rootMargin: "0px", threshold: 0.3})
    const triggerElement = mainRef.current
    if (triggerElement) observer.observe(triggerElement)

    getFields('homeAboutHeading1', 'homeAboutP1',
        'homeAboutP2', 'homeAboutBtnText', 'homeAboutImg'
    ).then( data => { setContent(data) } )

    return () => {
      if (triggerElement) observer.unobserve(triggerElement)
      observer.disconnect()
    }
  }, [])

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } else // Throw error if data fetching from contentful is unsuccessful
  return (
    <section className="py-0 relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        <div className="bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-16 px-4 md:px-9 lg:px-10">
          <div className="lg:max-w-xl">
            <div
              ref={mainRef}
              className="text-sm font-semibold text-brim-blue/70 uppercase tracking-wider mb-4"
            >
              WHO WE ARE
            </div>
            <h2
              style={{
                animationDelay: "0.2s",
                textShadow: "-2px 1.5px 0px rgba(80,80,80,0.2)",
              }}
              className={`font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight ${
                inView && !content.isLoading ? "animate-fade-in" : "opacity-0"
              }`}
            >
              {homeAboutHeading1 ? homeAboutHeading1.pt1 : ""}
              <span className="block text-brim-blue">
                {homeAboutHeading1 ? homeAboutHeading1.pt2 : ""}
              </span>
              <span className="block text-edge-green">
                {homeAboutHeading1 ? homeAboutHeading1.pt3 : ""}
              </span>
            </h2>
            <div
              style={{ animationDelay: "0.4s" }}
              className={`space-y-4 mb-8 ${
                inView && !content.isLoading ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {homeAboutP1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {homeAboutP2}
              </p>
            </div>
            <div
              style={{ animationDelay: "0.6s" }}
              className={`${
                inView && !content.isLoading ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <HashLink
                to="/about-us#page-top"
                smooth
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-brim-blue hover:bg-accent-blue text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>{homeAboutBtnText}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-5 h-5 ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-50/20"></div>
          <img
            loading="lazy"
            alt=""
            src={homeAboutImg}
            style={{ animationDelay: "0.8s" }}
            className={`w-full h-full object-cover ${
              inView && !content.isLoading ? "animate-fade-in" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default About
