import Project from "./cards/Project.jsx"
import { useContext, useState, useEffect, useRef } from 'react'
import ProjectsContext from '../../context/ProjectsContext.jsx';

function CardsHolder({ screenSize }) {
  const { projectsRequest } = useContext(ProjectsContext);
  const [ projects, setProjects ] = useState()
  const batch = 5
  const [ query, setQuery ] = useState({ filter: '', limit: batch, page: 1 })

  const selectedStyle = (condition) => {
    if (condition) return 'px-4 text-[18px] text-brim-text font-semibold'
    else return 'px-4 text-[17px] text-gray-400 hover:text-brim-blue/70 transition-colors'
  }
  const selectorStyle = {
    all: selectedStyle((query.filter === '')),
    commercial: selectedStyle((query.filter === 'fields.tag:Commercial')),
    renovation: selectedStyle((query.filter === 'fields.tag:Renovation')),
    construction: selectedStyle((query.filter === 'fields.tag:Construction')),
    interiorDesign: selectedStyle((query.filter === 'fields.tag:Interior Design')),
  }
  const bottomRef = useRef(null)

  const size = { 'sm': 1, 'md': 2, 'lg': 3 }
  const partitionProjects = () => {
    const partitioned = Array.from({length: size[screenSize]}, _ => [])
    let tick = 0
    projects.forEach((project) => {
      if (tick > size[screenSize] - 1) tick = 0
      partitioned[tick].push(project)
      tick += 1
    })
    return partitioned
  }

  // Effect for Query logic
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting && !window.projectsPageFetching) {
        window.projectsPageFetching = true
        projectsRequest(query.filter, query.limit, (query.page * batch) - batch)
            .then(result => {
              if (Array.isArray(result) && result.length > 0) {
                let joinedWithoutRepetition = projects
                if (Array.isArray(projects)) {
                  result.forEach(returnedProject => {
                    let match = false
                    projects.forEach(prevProject => {
                      if (prevProject.id === returnedProject.id) match = true
                    })
                    if (!match) joinedWithoutRepetition.push(returnedProject)
                  })
                }
                else joinedWithoutRepetition = result

                setProjects(joinedWithoutRepetition)
                setQuery(prev => {
                  return {...prev, ...{ page: prev.page + 1 } }
                })
              } else if (result.isError) setProjects(result)
              window.projectsPageFetching = false
            })
      }
    }, { root: null, threshold: 0.1 })

    const batchTrigger = bottomRef.current
    if (batchTrigger) observer.observe(batchTrigger)

    return () => {
      if (batchTrigger) observer.unobserve(batchTrigger)
      observer.disconnect()
    }
  }, [ query ])

  if (projects && projects['isError']) {
    const errorMessage = "There was a problem fetching the projects"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } else// Throw error if data fetching from contentful is unsuccessful
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 bg-gradient-to-l  from-white/30 via-white to-white/30 mb-10 animate-fade-in border-b  border-gray-100 py-4">
        <div>
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <button
              className={selectorStyle.all}
              onClick={() => {
                if (!window.projectsPageFetching) {
                  setProjects(undefined);
                  setQuery({ filter: "", limit: batch, page: 1 });
                }
              }}
            >
              All Projects
            </button>
            <button
              className={selectorStyle.commercial}
              onClick={() => {
                if (!window.projectsPageFetching) {
                  setProjects(undefined);
                  setQuery({
                    filter: "fields.tag:Commercial",
                    limit: batch,
                    page: 1,
                  });
                }
              }}
            >
              Commercial
            </button>
            <button
              className={selectorStyle.renovation}
              onClick={() => {
                if (!window.projectsPageFetching) {
                  setProjects(undefined);
                  setQuery({
                    filter: "fields.tag:Renovation",
                    limit: batch,
                    page: 1,
                  });
                }
              }}
            >
              Renovation
            </button>
            <button
              className={selectorStyle.construction}
              onClick={() => {
                if (!window.projectsPageFetching) {
                  setProjects(undefined);
                  setQuery({
                    filter: "fields.tag:Construction",
                    limit: batch,
                    page: 1,
                  });
                }
              }}
            >
              Construction
            </button>
            <button
              className={selectorStyle.interiorDesign}
              onClick={() => {
                if (!window.projectsPageFetching) {
                  setProjects(undefined);
                  setQuery({
                    filter: "fields.tag:Interior Design",
                    limit: batch,
                    page: 1,
                  });
                }
              }}
            >
              Interior Design
            </button>
          </div>
        </div>
      </div>
      {Array.isArray(projects) ? (
        <div
          className="relative"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size[screenSize]}, minmax(0, 1fr))`,
            gap: "18px",
          }}
        >
          {partitionProjects().map((partition) => {
            return (
              <div className="space-y-6">
                {partition.map((project) => (
                  <Project
                    content={{
                      tag: project.tag,
                      img: project.gallery[0],
                      title: project.title,
                      client: project.client,
                      location: project.location,
                      dateCompleted: project.dateCompleted,
                      description: project.description,
                      shortDescription: project.shortDescription,
                      projectIdLink: `/projects/${project.id}`,
                    }}
                  />
                ))}
              </div>
            );
          })}
          <div
            key={crypto.randomUUID()}
            ref={bottomRef}
            className="absolute w-full h-5 bg-black/0 bottom-0"
          ></div>
        </div>
      ) : (
        <div className="w-full h-[60vh] flex items-center justify-center gap-5 font-playfair italic text-brim-blue/90 text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-bold">
          <p>Loading Content</p>
          <p>
            <span style={{ animationDelay: "0.1s" }} className="animate-pulse">
              .
            </span>
            <span style={{ animationDelay: "0.25s" }} className="animate-pulse">
              .
            </span>
            <span style={{ animationDelay: "0.4s" }} className="animate-pulse">
              .
            </span>
          </p>
          {/* <svg className="w-[55px] h-[55px] text-brim-blue/90 animate-loading-rotate" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" id="Layer_1" viewBox="0 0 367.136 367.136" xmlSpace="preserve">
      <path d="M367.136,149.7V36.335l-39.14,38.953c-13.024-17.561-29.148-32.731-47.732-44.706  c-29.33-18.898-63.352-28.888-98.391-28.888C81.588,1.694,0,83.282,0,183.568s81.588,181.874,181.874,181.874  c34.777,0,68.584-9.851,97.768-28.488c28.394-18.133,51.175-43.703,65.881-73.944l-26.979-13.119  c-25.66,52.77-78.029,85.551-136.669,85.551C98.13,335.442,30,267.312,30,183.568S98.13,31.694,181.874,31.694  c49.847,0,96.439,24.9,124.571,65.042L253.226,149.7H367.136z"/>
    </svg> */}
          <div
            key={crypto.randomUUID()}
            ref={bottomRef}
            className="absolute w-full h-5 bg-black/0 bottom-0"
          ></div>
        </div>
      )}
    </>
  );
}

export default CardsHolder
