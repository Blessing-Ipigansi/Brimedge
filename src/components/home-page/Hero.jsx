import BgSlideshow from "./sub-components/BgSlideshow"
// import { homeHero } from "../../assets/simulateCMS" // Replace with redux
import { useContext, useEffect, useState } from "react"
import HomeContext from "../../context/HomeContext"
import { HashLink } from "react-router-hash-link"
// import { brimedgeStats } from "../../assets/simulateCMS" // Replace with redux

function Hero() {
  const { getFields } = useContext(HomeContext)
  const [ content, setContent ] = useState({ isLoading: true })
  const {homeHeroBgImgs, homeHeroP1,
    homeHeroHeading1, homeHeroBtnText1,
    homeHeroBtnText2, homeHeroP2, homeHeroProjectsCompleted,
    homeHeroYearsOfExperience} = content

  useEffect(() => {
    getFields('homeHeroBgImgs', 'homeHeroHeading1', 
        'homeHeroP1', 'homeHeroBtnText1',
        'homeHeroBtnText2', 'homeHeroP2', 'homeHeroProjectsCompleted',
        'homeHeroYearsOfExperience'
    )
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
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <BgSlideshow key={crypto.randomUUID()} backgroundImages={homeHeroBgImgs}/>
    <div className="absolute inset-0 bg-gradient-to-r from-brim-blue/40 via-brim-blue/20 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-edge-green rounded-full animate-pulse opacity-60"></div>
    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-edge-green rounded-full animate-pulse opacity-60"></div>
    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
    <div className="absolute z-20 bottom-1/3 left-1/4 w-1.5 h-1.5 bg-edge-green rounded-full animate-pulse opacity-50"></div>
    <div className="container mx-auto px-4 relative z-10 text-white py-20">
      <div key={crypto.randomUUID()} id="hopo" className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
        style={(content.isLoading)&& {opacity: 0}}
      >
        <div className="lg:order-1">
          <h1 style={{animationDelay: '0.2s', textShadow: '-2px 1.5px 0px rgb(80,80,80)'}} className="font-oswald font-bold mb-16 tracking-[0.5px] text-[48px] md:text-[50px] lg:text-[60px] leading-[56px] md:leading-[56px] lg:leading-[70px] animate-fade-in">
            { homeHeroHeading1 }</h1>
          <div className="text-center lg:text-left mb-8">
            <p className="text-lg text-white/70 leading-relaxed max-w-md animate-fade-in">
              { homeHeroP1 }</p>
          </div> 
          <div style={{animationDelay: '0.6s'}} className="flex flex-col sm:flex-row gap-4 animate-fade-in mb-8">
            <HashLink to='/projects#projects-page' className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 group bg-edge-green hover:bg-edge-green/90 text-brim-blue font-bold px-6 py-3 rounded-xl shadow-2xl hover:shadow-edge-green/25 transform hover:scale-105 transition-all duration-300">
              <span>{ homeHeroBtnText1 }</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </HashLink>
            <HashLink to='/contact#page-top' className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-6 py-3 rounded-xl transition-all duration-300">
              <span>{ homeHeroBtnText2 }</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            </HashLink>
          </div>
        </div>
        <div style={{animationDelay: '0.8s'}} className="lg:order-2 flex flex-col items-center lg:items-start space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md">
            <div className=" rounded-2xl p-6  text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  className="text-edge-green/80"
                  width={100}
                  height={100}
                  fill="currentColor"
                >
                  <path d="M28.244,31.931h32a1.75,1.75,0,0,0,1.75-1.75V21.59a1.75,1.75,0,0,0-1.75-1.75h-32a1.75,1.75,0,0,0-1.75,1.75v8.59A1.75,1.75,0,0,0,28.244,31.931Zm1.75-8.59h28.5v5.09h-28.5Z" />
                  <path d="M28,52.729H38.455a1.75,1.75,0,0,0,1.75-1.75V40.524a1.75,1.75,0,0,0-1.75-1.75H28a1.75,1.75,0,0,0-1.75,1.75V50.979A1.75,1.75,0,0,0,28,52.729Zm1.75-10.454h6.954v6.954H29.751Z" />
                  <path d="M60.244,38.774H49.79a1.75,1.75,0,0,0-1.75,1.75V50.979a1.75,1.75,0,0,0,1.75,1.75H60.244a1.75,1.75,0,0,0,1.75-1.75V40.524A1.75,1.75,0,0,0,60.244,38.774Zm-1.75,10.454H51.54V42.274h6.954Z" />
                  <path d="M38.455,71.9a1.75,1.75,0,0,0,1.75-1.75V59.691a1.75,1.75,0,0,0-1.75-1.75H28a1.75,1.75,0,0,0-1.75,1.75V70.145A1.75,1.75,0,0,0,28,71.9Zm-8.7-10.454h6.954V68.4H29.751Z" />
                  <path d="M60.244,57.941H49.79a1.75,1.75,0,0,0-1.75,1.75V70.145a1.75,1.75,0,0,0,1.75,1.75H60.244a1.75,1.75,0,0,0,1.75-1.75V59.691A1.75,1.75,0,0,0,60.244,57.941ZM58.494,68.4H51.54V61.441h6.954Z" />
                  <path d="M115,113.25H100.295v-5.125h8.128a1.75,1.75,0,0,0,1.75-1.75V97.75a1.75,1.75,0,0,0-1.75-1.75h-8.128V89.125a1.75,1.75,0,0,0-1.75-1.75H90.417V80.5a1.75,1.75,0,0,0-1.75-1.75H70.661V13a1.75,1.75,0,0,0-1.75-1.75H19.577A1.75,1.75,0,0,0,17.827,13V113.25H13a1.75,1.75,0,0,0,0,3.5H115a1.75,1.75,0,0,0,0-3.5Zm-8.327-8.625H90.417V99.5h16.256Zm-36.012,0V99.5H86.917v5.125ZM77.039,96H70.661V90.875h6.378Zm-6.378,12.125h6.378v5.125H70.661ZM96.795,96H80.539V90.875H96.795ZM86.917,82.25v5.125H70.661V82.25Zm-65.59-67.5H67.161v98.5H56.827V83.329a1.75,1.75,0,0,0-1.75-1.75H33.411a1.75,1.75,0,0,0-1.75,1.75V113.25H21.327Zm32,98.5H35.161V85.079H53.327Zm27.212,0v-5.125H96.795v5.125Z" />
                </svg>
                <div className="text-3xl font-bold">{ homeHeroProjectsCompleted+'+' }</div>
              </div>
              <div className="text-white/80">Projects Completed</div>
            </div> 
            <div className="rounded-2xl p-6  text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-edge-green/80"
                  width={100}
                  height={100}
                  viewBox="0 0 128 128"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M108.992,128h-4V82.95l0.594-0.587c8.777-8.67,13.609-20.187,13.609-32.43
                            C119.195,24.605,98.283,4,72.58,4C46.871,4,25.955,24.606,25.955,49.934c0,0.665,0.025,1.323,0.051,1.983l0.026,0.69
                            l-14.247,24.33h9.805v20.926c0,6.025,4.983,10.928,11.108,10.928H55.46V128h-4v-15.209H32.698
                            c-8.331,0-15.108-6.696-15.108-14.928V80.938H4.804L21.99,51.594c-0.02-0.552-0.036-1.104-0.036-1.66
                            C21.955,22.4,44.665,0,72.58,0c27.91,0,50.615,22.4,50.615,49.933c0,13.042-5.037,25.323-14.203,34.679V128z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M71.984,86.709c-20.557,0-37.281-16.5-37.281-36.782h4c0,18.076,14.93,32.782,33.281,32.782
                            c18.35,0,33.277-14.706,33.277-32.782c0-18.074-14.928-32.778-33.277-32.778v-4c20.555,0,37.277,16.499,37.277,36.778
                            C109.262,70.209,92.539,86.709,71.984,86.709z"
                        />
                      </g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            d="M38.704,49.927h-4c0-0.699,0.02-1.393,0.06-2.083l3.993,0.228
                              C38.722,48.686,38.704,49.304,38.704,49.927z"
                          />
                        </g>
                        <g>
                          <path
                            fill="currentColor"
                            d="M39.174,44.395l-3.941-0.682c0.239-1.382,0.562-2.766,0.96-4.113l3.836,1.135
                              C39.674,41.934,39.387,43.165,39.174,44.395z M41.304,37.202l-3.677-1.575c0.551-1.287,1.185-2.558,1.884-3.777l3.471,1.989
                              C42.359,34.925,41.794,36.057,41.304,37.202z M45.035,30.69l-3.22-2.373c0.831-1.127,1.736-2.219,2.691-3.246l2.929,2.725
                              C46.583,28.712,45.775,29.686,45.035,30.69z M50.149,25.19l-2.604-3.037c1.063-0.911,2.189-1.771,3.349-2.557l2.244,3.312
                              C52.104,23.609,51.098,24.377,50.149,25.19z M56.366,20.975l-1.858-3.542c1.238-0.649,2.527-1.236,3.833-1.743l1.449,3.729
                              C58.623,19.871,57.471,20.395,56.366,20.975z M63.368,18.258L62.35,14.39c1.353-0.356,2.742-0.64,4.129-0.842l0.578,3.958
                              C65.816,17.687,64.576,17.939,63.368,18.258z"
                          />
                        </g>
                        <g>
                          <path
                            fill="currentColor"
                            d="M70.125,17.199l-0.215-3.994c0.686-0.037,1.379-0.056,2.076-0.056v4
                              C71.361,17.149,70.74,17.166,70.125,17.199z"
                          />
                        </g>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="58.178" y="47.927" fill="currentColor" width="27.613" height="4" />
                      </g>
                      <g>
                        <rect x="69.984" y="36.318" fill="currentColor" width="4" height="27.219" />
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="text-3xl font-bold">{ homeHeroYearsOfExperience+'+' }</div>
              </div>
              <div className="text-white/80">Years in the Industry</div>
            </div> 
          </div>
          <div className="text-center lg:text-left">
            <p className="text-lg text-white/70 leading-relaxed max-w-md">
              { homeHeroP2 }</p>
          </div> 
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
  </>
}

export default Hero
