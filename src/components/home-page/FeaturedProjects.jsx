import FeaturedProject from "./sub-components/FeaturedProject"
// import { homeProjects } from "../../assets/simulateCMS" // Replace with redux
// import { projects } from "../../assets/simulateCMS" // Replace with redux
import { useContext, useState, useEffect, useRef } from 'react'
import ProjectsContext from '../../context/ProjectsContext.jsx';

function FeaturedProjects({ screenSize }) {
  const { projectsRequest } = useContext(ProjectsContext);
  const [ featuredProjects, setFeaturedProjects ] = useState({ isLoading: true })
  const [ background, setBackground ] = useState(null)

  const [inView, setInView] = useState(false)
  const mainRef = useRef()
  const size = { 'sm': 1, 'md': 2, 'lg': 3 }

  useEffect(() => {
    const observer = new IntersectionObserver(( [entry] ) => {
      if (entry.isIntersecting) setInView(true)
    }, { root: null, rootMargin: "0px", threshold: 0.3})
    const triggerElement = mainRef.current
    if (triggerElement) observer.observe(triggerElement)

    projectsRequest("fields.isFeatured:true", 20, 0).then( data => {
      const partitioned = Array.from({length: size[screenSize]}, _ => [])
      let tick = 0
      data.forEach((project) => {
        if (tick > size[screenSize] - 1) tick = 0
        partitioned[tick].push(project)
        tick += 1
      })
      setBackground((Array.isArray(partitioned) && partitioned[0].length > 0)&& partitioned[0][0].gallery[0])
      setFeaturedProjects(partitioned)
    } )

    return () => {
      if (triggerElement) observer.unobserve(triggerElement)
      observer.disconnect()
    }
  }, [])

  if (Array.isArray(featuredProjects) === false  && featuredProjects.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } else // Throw error if data fetching from contentful is unsuccessful
  return <section id="featured-projects" className="relative">
  <div className='z-10 absolute top-[-5px] w-full h-[10px] shadow-[0_0_15px_rgba(255,_255,_255,_0.4)] backdrop-blur-sm'></div>
  <div className="py-20 relative">
    <div className="absolute top-0 w-full h-full">
      <div className="w-full h-[100vh] sticky top-0">
        <img src={ background }
             className="object-cover absolute w-full h-full" alt=""
        />
        <div className="inset-0 absolute bg-black/20"></div>
        <div className="inset-0 absolute bg-gradient-to-r from-[#5969FF]/10 to-black/10"></div>
        <div className="inset-0 absolute bg-gradient-to-b from-white/15 to-black/20"></div>
      </div>
    </div>
    <div className='mx-auto px-4 md:px-9 lg:px-12 relative z-10 max-w-[1600px]'>
      <div className='text-center mb-16'>
        <h2 className='tracking-[0.5px] font-bold leading-tight text-4xl md:text-5xl lg:text-6xl text-black font-oswald'>
          <div ref={mainRef} className={`mx-auto w-min relative ${(inView)? 'animate-fade-in': 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <p className="absolute inset-0 w-min whitespace-nowrap pb-4 text-white [-webkit-text-stroke:2px_#fff] tracking-[2px]"
              style={{textShadow: '0 0 0 #fff'}}>
              Our Featured Projects</p>
            <p className="relative w-min whitespace-nowrap bg-clip-text bg-brim-blue pb-4 text-transparent tracking-[2px]">
              Our Featured Projects</p>
          </div>
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${size[screenSize]}, minmax(0, 1fr))`,
        gap: '18px'
      }}>
        {(Array.isArray(featuredProjects) && featuredProjects[0].length > 0) &&
          featuredProjects.map((partition, i) =>
          <div key={`featured-partition${i}`} className="space-y-6">
            {partition.map((project) => <FeaturedProject
              key={project.id}
              content={{
                title: project.title,
                location: project.location,
                link: `/projects/${project.id}#page-top`,
                img: project.gallery[0],
              }}
              bgChanger={setBackground}
            />)}
          </div>)
        }
      </div>
    </div>
  </div>
  <div className='z-10 absolute bottom-[-5px] w-full h-[10px] backdrop-blur-sm'></div>
  </section>
}

export default FeaturedProjects
