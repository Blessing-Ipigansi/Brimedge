// import { homeOurProcess } from "../../assets/simulateCMS" // Replace with Context
import { HashLink } from "react-router-hash-link"
import { ReactSVG } from "react-svg"
import { useContext, useState, useEffect, useRef } from 'react'
import HomeContext from "../../context/HomeContext.jsx";

function OurProcess() {
  const { getFields } = useContext(HomeContext)
  const [ content, setContent ] = useState({ isLoading: true })
  const {homeOurProcessImg, homeOurProcessImgP1, homeOurProcessImgP2, homeOurProcessProcess} = content
  const bgGradients = [
    'linear-gradient(to bottom right, #03045E ,#0003D1)',
    'linear-gradient(to bottom right, #00ff48, #00ff48)',
    'linear-gradient(to bottom right, #374151, #111827)',
    'linear-gradient(to bottom right, #03045E, #0003D1, #03045E)'
  ]
  const [svgError, setSvgError] = useState(false)
  const [svgImgError, setSvgImgError] = useState(false)

  const [inView, setInView] = useState(false)
  const mainRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(( [entry] ) => {
      if (entry.isIntersecting) setInView(true)
    }, { root: null, rootMargin: "0px", threshold: 0.3})
    const triggerElement = mainRef.current
    if (triggerElement) observer.observe(triggerElement)

    getFields('homeOurProcessImg', 'homeOurProcessImgP1',
        'homeOurProcessImgP2', 'homeOurProcessProcess'
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
  } // Throw error if data fetching from contentful is unsuccessful
  return <section ref={mainRef} className="py-0 relative overflow-hidden">
    <div className="grid lg:grid-cols-2 min-h-[90vh]">
      <div className="bg-white flex items-center justify-center py-16 px-4 md:px-9 lg:px-10">
        <div className="lg:max-w-xl w-full">
          <div className="grid grid-cols-1 gap-8">
            { (homeOurProcessProcess) && homeOurProcessProcess.map((process, i) =>
              <div key={crypto.randomUUID()} className={`flex items-start gap-4 group ${(inView && !content.isLoading)? 'animate-from-left': 'opacity-0'}`} style={{animationDelay: `0.${i*2}s`}}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    color: 'white',
                    backgroundImage: bgGradients[i % bgGradients.length]
                  }}
                > {(!svgError) ?
                  <ReactSVG onError={() => setSvgError(true)} src={process.svg}
                    beforeInjection={(svg) => {
                      svg.setAttribute('style', 'width: 24px; height: 24px; color: white')
                      svg.setAttribute('stroke', 'currentColor')
                      svg.querySelectorAll('[stroke]').forEach(el => {
                        el.setAttribute('stroke', 'currentColor')
                      })
                    }}
                  />:
                  (!svgImgError) ?
                  <img alt="" src={process.svg} onError={() => setSvgImgError}
                    style={{
                      width: '24px',
                      height: '24px',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />:
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-[24px] h-[24px] text-brim-blue group-hover:text-white transition-colors duration-300"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  }
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white-bg-green transition-colors duration-300">
                    { process.title }</h3>
                  <p className="text-gray-600 leading-relaxed">
                    { process.para }</p>
                </div>
              </div>
            ) }
          </div>
          <div className="mt-12">
            <HashLink smooth to='/about-us#what-we-do' className={`inline-flex items-center gap-3 text-brim-blue hover:text-accent-blue font-semibold text-lg group transition-colors duration-300 ${(inView && !content.isLoading)? 'animate-from-left': 'opacity-0'}`} style={{animationDelay: '1s'}}>
              <span>Discover our services</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </HashLink>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 lg:p-16">
        <div className="relative max-w-lg w-full">
          <div className="absolute -inset-6 bg-gradient-to-br from-brim-blue via-edge-green to-brim-blue rounded-3xl rotate-1"></div>
          <div className="absolute -inset-4 bg-white rounded-2xl"></div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img alt="" loading='lazy' src={homeOurProcessImg} style={{animationDelay: '1s'}} className={`w-full h-[500px] object-cover ${(inView && !content.isLoading)? 'animate-fade-in': 'opacity-0'}`}/>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <p className={`text-white text-lg font-semibold ${(inView && !content.isLoading)? 'animate-fade-in': 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
                { homeOurProcessImgP1 }</p>
              <p className={`text-white/80 text-sm ${(inView && !content.isLoading)? 'animate-fade-in': 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
                { homeOurProcessImgP2 }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default OurProcess
