// import { contactPage } from "../../assets/simulateCMS.js" // Replace with CMS
import { useContext, useState, useEffect } from 'react'
import ContactContext from "../../context/ContactContext.jsx"

function MessageUs() {
  const { getFields } = useContext(ContactContext)
  const [ content, setContent ] = useState({
    contactPageMessageHeader1: "",
    contactPageMessageParagraph: "",
    contactPageSubmitBtnCaption: ""
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {...prevFormData, ...{[event.target.name]: event.target.value}}
    })
  }

  useEffect(() => {
    getFields('contactPageMessageHeader1', 'contactPageMessageParagraph', 'contactPageSubmitBtnCaption')
    .then( data => { setContent(data) } )
  }, [])

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return <section className="h-full border-x-[1px] border-gray-100 bg-gradient-to-br from-white to-gray-50">
    <div className="p-8 pt-6">
      {/* Send Us a Message */}
      <div className="flex flex-col">
        <div className="w-16 h-16 bg-gradient-to-br from-edge-green to-edge-green/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send h-8 w-8 text-white"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
        </div>
        <div className="text-center">
          <h2 className="text-brim-blue font-bold text-[29px] leading-[48px]">
            {content.contactPageMessageHeader1}</h2>
          <p className="text-gray-600">
            {content.contactPageMessageParagraph}</p>
        </div>
      </div>
      {/* Form */}
      <form action="" className="grid md:grid-cols-2 mt-9 gap-x-7 gap-y-8">
        <div className="space-y-2">
          <label className="text-gray-700 text-[15px] font-semibold">Nice to meet you</label>
          <input className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-green-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-2 border-gray-200 focus:border-brim-blue/60 rounded-xl transition-all duration-300 group-hover:border-gray-300 hover:border-gray-300"
            placeholder="What's your name?" required type="text" name="name" value={formData.name} onChange={handleChange} 
          />
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 text-[15px] font-semibold">Email address</label>
          <input className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-green-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-2 border-gray-200 focus:border-brim-blue/60 rounded-xl transition-all duration-300 group-hover:border-gray-300 hover:border-gray-300"
            placeholder="Enter your email address" required type="email" name="email" value={formData.email} onChange={handleChange} 
          />
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 text-[15px] font-semibold">Optional</label>
          <input className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-green-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-2 border-gray-200 focus:border-brim-blue/60 rounded-xl transition-all duration-300 group-hover:border-gray-300 hover:border-gray-300"
            placeholder="Your phone number" type="text" name="phone" value={formData.phone} onChange={handleChange} 
          />
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 text-[15px] font-semibold">Subject</label>
          <input className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-green-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-2 border-gray-200 focus:border-brim-blue/60 rounded-xl transition-all duration-300 group-hover:border-gray-300 hover:border-gray-300"
            placeholder="How can we help you?" type="text" name="subject" value={formData.subject} onChange={handleChange} 
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-gray-700 text-[15px] font-semibold">Your Message</label>
          <textarea className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-green-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-40 border-2 border-gray-200 focus:border-brim-blue/60 rounded-xl transition-all duration-300 group-hover:border-gray-300 hover:border-gray-300"
            placeholder="Please provide details about your project, timeline, and specific requirements..." required name="message" value={formData.message} onChange={handleChange} 
          />
        </div>
        <button className="flex rounded-xl text-white px-10 py-4 text-[15px] font-semibold md:col-span-2 items-center justify-center bg-gradient-to-r from-brim-blue to-accent-blue hover:from-accent-blue hover:to-brim-blue hover:scale-105 transition-all duration-300"
          type="submit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send h-[18px] w-[18px] mr-[10px]"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
          <span>{content.contactPageSubmitBtnCaption}</span>
        </button>
      </form>
    </div>
  </section>
}

export default MessageUs
