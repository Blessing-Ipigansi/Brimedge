import { useParams } from 'react-router-dom'
import { projects } from "../assets/simulateCMS" // Replace with CMS
import Gallery from '../components/project-page/Gallery'
import ProjectDetails from '../components/project-page/ProjectDetails'
import SubProject from '../components/project-page/SubProject'
import CallToAction from "../components/home-page/CallToAction"
import { selectRandom } from '../assets/helpFunctions'
import Testimonial from '../components/project-page/Testimonial'
import Share from '../components/project-page/Share'
import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from "react-router-dom";

function ProjectPage() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => projectId === p.id)
  const sidePanelProjects = selectRandom(projects, 10)

  const [hidePopup, setHidePopup] = useState(false)
  const sharePopupRef = useRef(null)
  const Observer = new IntersectionObserver((DOM_elements) => {
    DOM_elements.forEach(element => {
      if (element.isIntersecting || (element.target.getBoundingClientRect().top <= 0 )) setHidePopup(true)
      else setHidePopup(false)
    })
  }, {root: null})

  useEffect(() => {
    if (!project) navigate(`/non-exisitent-or-removed-project/${projectId}`)
    if (sharePopupRef.current) Observer.observe(sharePopupRef.current)
    return () => {
      if (sharePopupRef.current) Observer.unobserve(sharePopupRef.current)
    }
  }, [hidePopup])

  // SEO metadata
  const rawBaseUrl = window.location.origin
  const baseUrl = rawBaseUrl.replace(/\/+$/, "")
  const fullPath = baseUrl + window.location.pathname
  const breadcrumbData = (project)? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl},
      {"@type": "ListItem", "position": 2, "name": "Projects", "item": `${baseUrl}/projects`},
      {"@type": "ListItem", "position": 3, "name": project.title, "item": fullPath}
    ]
  }: undefined
  const projectData = (project)? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "headline": project.title,
    "description": project.description,
    "image": project.gallery[0],
    "author": {"@type": "Organization", "name": "Brimedge"},
    "datePublished": project.datePublished
  }: undefined

  if (project) return <>
  {/* SEO metadata */}
  <Helmet>
    <title>{project.title} | Projects | Brimedge</title>
    <meta name="description" content={project.description} />
    <link rel="canonical" href={fullPath} />

    <meta property="og:title" content={project.title} />
    <meta property="og:description" content={project.description} />
    <meta property="og:image" content={project.gallery[0]} />
    <meta property="og:url" content={fullPath} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={project.title} />
    <meta name="twitter:description" content={project.description} />
    <meta name="twitter:image" content={project.gallery[0]} />

    <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
    <script type="application/ld+json">{JSON.stringify(projectData)}</script>
  </Helmet>
  <main id="project-page" className=" min-h-[100vh] bg-[url('/Pattern-export.svg')]">
    <Share keepHidden={hidePopup} title={project.title} description={project.description}/>
    <div className='max-w-[1600px] px-4 pt-2 mx-auto'>
      <div className='grid lg:grid-cols-[2fr_1fr]'>
        <div>
          <Gallery key={projectId} pictures={project.gallery}/>
          <ProjectDetails 
            title={project.title}
            location={project.location}
            paragraphs={project.paragraphs}
            description={project.description}
            client={project.client}
            size={project.size}
            completionDate={project.monthYearCompleted}
            keyFeatures={project.keyFeatures}
            awards={project.awards}
          />
        </div>
        <div className='flex flex-col pl-4 pr-4 lg:pl-7 lg:pr-0 pt-[46px] lg:pt-0'>
          <h2 className='lg:font-bold font-semibold text-[16px] lg:text-[18px] text-brim-blue bg-gray-500/20 lg:bg-transparent pt-2 lg:pt-0 mx-[-32px] lg:mx-0 px-[32px] lg:px-0 border-b-[1px] border-black/50 lg:border-none'>
            OTHER PROJECTS</h2>
          <div className='space-y-4 sticky top-0'>
            {sidePanelProjects.map((proj) => 
              <SubProject key={proj.id}
                link={`/projects/${proj.id}#project-page`}
                tag={proj.tag}
                title={proj.title}
                description={proj.description}
                img={proj.gallery[0]}
              />
            )}
          </div>  
        </div>
      </div>
      <Testimonial testimonial={project.testimonial}/>
      <div className='w-full h-0 relative'>
        <div ref={sharePopupRef} className='absolute inset-0 w-full h-1'></div>
      </div>
    </div>
    <CallToAction />
  </main>
  </>
}

export default ProjectPage
