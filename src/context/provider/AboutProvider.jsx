import AboutContext from "../AboutContext"
import {createClient} from "contentful"
import {sanitize} from "../../assets/helpFunctions.js"
import {useState} from "react"

function AboutProvider({ children }) {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  })
  const [aboutContent, setAboutContent] = useState()

  const globalWait = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      if (window.aboutPageContent) {
        clearInterval(intervalId)
        resolve(window.aboutPageContent)
        reject(window.aboutPageContent)
      }
    }, 200)
  })

  const getAboutContent = async () => {
    try {
      if (window.aboutPageContent && window.aboutPageContent.isError) window.aboutPageContentPending = false
      if (!window.aboutPageContentPending) {
        window.aboutPageContentPending = true
        const aboutObject = await client.getEntries({
          "content_type": "aboutPage",
          "select": "fields"
        })
        return sanitize(
          [
            "entryTitle",
            "aboutHeroVideo",
            "aboutHeroAvgClientRating",
            "aboutHeroTag2",
            "aboutHeroMainText",
            "aboutClientLogos",
            "aboutUsBreif",
            "aboutUsMoreAboutUsIntro",
            "aboutUsMoreAboutUsParagraphs",
            "aboutUsMoreAboutUsCTA",
            "aboutTeamSlideshow",
            "aboutFounderHeading",
            "aboutFounderFromOurFounder",
            "aboutFounderName",
            "aboutFounderPortrait",
            "aboutFounderPortraitFront",
            "aboutOurValuesTopPhrase",
            "aboutOurValuesHeading",
            "aboutOurValuesValues",
            "aboutServicesHeading",
            "aboutServicesIntroParagraph",
            "aboutServicesService"
          ],
          aboutObject
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
    if (!aboutContent) {
      let content = await getAboutContent()
      let requestedFields = {}
      if (content) {
        fields.forEach( field => {
          requestedFields[field] = content[field]
        })
        if (!window.aboutPageContent) {
          window.aboutPageContent = content
          setAboutContent(content)
        }
      } else {
        window.aboutPageContent = { isError: true }
        return { isError: true }
      }
      return requestedFields
    } else {
      let requestedFields = {}
      fields.forEach( field => {
        requestedFields[field] = aboutContent[field]
      })
      return requestedFields
    }
  }

  return <AboutContext.Provider value={{ getFields }}>
    { children }
  </AboutContext.Provider>
}

export default AboutProvider
