import HomeContext from "../HomeContext"
import {createClient} from "contentful"
import {sanitize} from "../../assets/helpFunctions.js"
import {useState} from "react"

function HomeProvider({ children }) {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  })
  const [homeContent, setHomeContent] = useState()

  const globalWait = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      if (window.homePageContent) {
        clearInterval(intervalId)
        resolve(window.homePageContent)
        reject(window.homePageContent)
      }
    }, 200)
  })

  const getHomeContent = async () => {
    try {
      if (window.homePageContent && window.homePageContent.isError) window.homePageContentPending = false
      if (!window.homePageContentPending) {
        window.homePageContentPending = true
        const homeObject = await client.getEntries({
          "content_type": "homePage",
          "select": "fields"
        })
        return sanitize(
          [
            "entryName",
            "homeHeroBgImgs",
            "homeHeroHeading1",
            "homeHeroP1",
            "homeHeroBtnText1",
            "homeHeroBtnText2",
            "homeHeroP2",
            "homeHeroProjectsCompleted",
            "homeHeroYearsOfExperience",
            "homeAboutHeading1",
            "homeAboutP1",
            "homeAboutP2",
            "homeAboutBtnText",
            "homeAboutImg",
            "homeOurProcessImg",
            "homeOurProcessImgP1",
            "homeOurProcessImgP2",
            "homeOurProcessProcess",
            "homeTestimonialsHeading",
            "homeTestimonialsClientLogos",
            "homeTestimonialsTestimonials",
            "homeFeaturedProjectsParagraph"
          ],
          homeObject
        );
      } else {
        return await globalWait
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const getFields = async (...fields) => {
    if (!homeContent) {
      let content = await getHomeContent()
      let requestedFields = {}
      if (content) {
        fields.forEach( field => {
          requestedFields[field] = content[field]
        })
        if (!window.homePageContent) {
          window.homePageContent = content
          setHomeContent(content)
        }
      } else {
        window.homePageContent = { isError: true }
        return { isError: true }
      }
      return requestedFields
    } else {
      let requestedFields = {}
      fields.forEach( field => {
        requestedFields[field] = homeContent[field]
      })
      return requestedFields
    }
  }

  return <HomeContext.Provider value={{ getFields }}>
    { children }
  </HomeContext.Provider>
}

export default HomeProvider
