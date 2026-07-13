import ContactContext from "../ContactContext"
import {createClient} from "contentful"
import {sanitize} from "../../assets/helpFunctions.js"
import {useState} from "react"

function ContactProvider({ children }) {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  })
  const [contactContent, setContactContent] = useState()

  const globalWait = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      if (window.contactPageContent) {
        clearInterval(intervalId)
        resolve(window.contactPageContent)
        reject(window.contactPageContent)
      }
    }, 200)
  })

  const getContactContent = async () => {
    try {
      if (window.contactPageContent && window.contactPageContent.isError) window.contactPageContentPending = false
      if (!window.contactPageContentPending) {
        window.contactPageContentPending = true
        const contactObject = await client.getEntries({
          "content_type": "contactPage",
          "select": "fields"
        })
        return sanitize(
          [
            "entryName",
            "contactPageLocationLabel",
            "contactPagePhoneLabel",
            "contactPageMailLabel",
            "contactPageActiveHoursLabel",
            "contactPageSocialsLabel",
            "contactPageMessageHeader1",
            "contactPageMessageParagraph",
            "contactPageSubmitBtnCaption"
          ],
          contactObject
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
    if (!contactContent) {
      let content = await getContactContent()
      let requestedFields = {}
      if (content) {
        fields.forEach( field => {
          requestedFields[field] = content[field]
        })
        if (!window.contactPageContent) {
          window.contactPageContent = content
          setContactContent(content)
        }
      } else {
        window.contactPageContent = { isError: true }
        return { isError: true }
      }
      return requestedFields
    } else {
      let requestedFields = {}
      fields.forEach( field => {
        requestedFields[field] = contactContent[field]
      })
      return requestedFields
    }
  }

  return <ContactContext.Provider value={{ getFields }}>
    { children }
  </ContactContext.Provider>
}

export default ContactProvider
