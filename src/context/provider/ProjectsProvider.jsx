import ProjectsContext from "../ProjectsContext"
import {createClient} from "contentful"
import {useState} from "react"
import {sanitize} from "../../assets/helpFunctions.js";

function ProjectsProvider({ children }) {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  })
  const [requestAndContent, setRequestAndContent] = useState({})

  const projectsRequest = async (filter, limit, skip=0) => {
    try {
      const queryKey = `${filter}|${limit}|${skip}`
      if (!requestAndContent[queryKey] || (requestAndContent[queryKey] && requestAndContent[queryKey].isError)) {
        const query = {
          "content_type": "projects",
          limit,
          skip
        }
        if (filter) query[filter.split(":", 2)[0]] = filter.split(":", 2)[1]
        const ContentfulObject = await client.getEntries(query)
        const projectsArray = ContentfulObject.items.map((projectObj) => {
          return {
            ...{id: projectObj.sys.id},
            ...{datePublished: projectObj.sys.createdAt.split("T", 2)[0]},
            ...sanitize(Object.keys(projectObj.fields), { items: [projectObj]})
          }
        })
        const toSaveQueryObject = {}
        toSaveQueryObject[queryKey] = projectsArray
        setRequestAndContent((prev) => { return {...prev, ...toSaveQueryObject} })
        return projectsArray
      } else return requestAndContent[queryKey]
    } catch (error) {
      console.log(error)
      return { isError: true }
    }
  }

  return <ProjectsContext.Provider value={{ projectsRequest }}>
    { children }
  </ProjectsContext.Provider>
}

export default ProjectsProvider