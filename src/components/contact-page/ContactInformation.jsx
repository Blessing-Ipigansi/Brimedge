// import { contact } from "../../assets/simulateCMS" // Replace with CMS
// import { contactPage } from "../../assets/simulateCMS" // Replace with CMS
import { useContext, useState, useEffect } from 'react'
import ContactContext from "../../context/ContactContext.jsx"
import GlobalContext from "../../context/GlobalContext.jsx"


function ContactInformation() {
  const { getFields: getPageFields } = useContext(ContactContext)
  const [ pageData, setPageData ] = useState({
    contactPageLocationLabel: "",
    contactPagePhoneLabel: "",
    contactPageMailLabel: "",
    contactPageActiveHoursLabel: "",
    contactPageSocialsLabel: ""
  })
  const { getFields: getContactFields } = useContext(GlobalContext)
  const [ contactData, setContactData ] = useState({
    contact: {
      location: "",
      phone: ["", ""],
      email: ["", ""],
      socialMediaHandles : {
        facebook: "https://web.facebook.com/",
        x: "https://x.com/",
        instagram: "https://instagram.com/",
        linkedIn: "https://www.linkedin.com/",
        youtube: "https://www.youtube.com"
      },
      workingHours: ["", "", ""]
    }
  })

  useEffect(() => {
    getPageFields('contactPageLocationLabel', 'contactPagePhoneLabel', 'contactPageMailLabel',
      'contactPageActiveHoursLabel', 'contactPageSocialsLabel'
    )
    .then( data => { setPageData(data) } )

    getContactFields('contact',).then( data => { console.log(data); setContactData(data) } )
  }, [])

  if (pageData.isError || contactData.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return <section className="h-full border-x-[1px] border-gray-100 bg-gradient-to-br from-white to-gray-50">
    {/* shadow-[0px_8px_15px_0px_rgba(0,0,0,0.1)] */}
    <div>
      {/* Contact Information */}
      <div className="lg:flex lg:flex-col p-4 lg:gap-3 gap-1 grid md:grid-cols-2">
        <div className="flex p-4 gap-6 hover:bg-gradient-to-br from-accent-blue/10 to-accent-blue/20 rounded-[16px] hover:scale-105 transition-all duration-300">
          <div className="pt-2">
            <svg
              className="text-brim-blue"
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="leading-[25px]">
            <p className="font-semibold text-[17px] text-gray-800 mb-1">{pageData.contactPageLocationLabel}</p>
            <p className="text-[15px] text-gray-600">{contactData.contact.location}</p>
          </div>
        </div>
        <div className="flex p-4 gap-6 hover:bg-gradient-to-br from-accent-blue/10 to-accent-blue/20 rounded-[16px] hover:scale-105 transition-all duration-300">
          <div className="pt-2">
            <svg
              className="text-brim-blue"
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                      19.79 19.79 0 0 1-8.63-3.07
                      19.5 19.5 0 0 1-6-6
                      19.79 19.79 0 0 1-3.07-8.63
                      A2 2 0 0 1 4.11 2h3
                      a2 2 0 0 1 2 1.72
                      c.12.84.3 1.66.54 2.45
                      a2 2 0 0 1-.45 2.11l-1.27 1.27
                      a16 16 0 0 0 6.06 6.06l1.27-1.27
                      a2 2 0 0 1 2.11-.45
                      c.79.24 1.61.42 2.45.54
                      a2 2 0 0 1 1.72 2z" />
            </svg>
          </div>
          <div className="leading-[25px]">
            <p className="font-semibold text-[17px] text-gray-800 mb-1">{pageData.contactPagePhoneLabel}</p>
            {contactData.contact.phone.map(number => 
              <p key={crypto.randomUUID()} className="text-[15px] text-gray-600">{number}</p>
            )}
          </div>
        </div>
        <div className="flex p-4 gap-6 hover:bg-gradient-to-br from-accent-blue/10 to-accent-blue/20 rounded-[16px] hover:scale-105 transition-all duration-300">
          <div className="pt-2">
            <svg
              className="text-brim-blue"
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            > 
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="leading-[25px]">
            <p className="font-semibold text-[17px] text-gray-800 mb-1">{pageData.contactPageMailLabel}</p>
            {contactData.contact.email.map(mail => 
              <p key={crypto.randomUUID()} className="text-[15px] text-gray-600">{mail}</p>
            )}
          </div>
        </div>
        <div className="flex p-4 gap-6 hover:bg-gradient-to-br from-accent-blue/10 to-accent-blue/20 rounded-[16px] hover:scale-105 transition-all duration-300">
          <div className="pt-2">
              <svg
                className="text-brim-blue"
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
          </div>
          <div className="leading-[25px]">
            <p className="font-semibold text-[17px] text-gray-800 mb-1">{pageData.contactPageActiveHoursLabel}</p>
            {contactData.contact.workingHours.map(period => 
              <p key={crypto.randomUUID()} className="text-[15px] text-gray-600">{period}</p>
            )}
          </div>
        </div>
      </div>
      {/* Follow us on socials */}
      <div className="pt-7 pb-7 mb-8 rounded-[16px] border-[1px] border-brim-blue/10 bg-gradient-to-r from-brim-blue/5 to-edge-green/5 mx-8 text-center">
        <p className="mb-5 font-semibold text-gray-800 text-[17px]">{pageData.contactPageSocialsLabel}</p>
        <div className="flex items-center justify-center gap-3 px-4">
          <a href={contactData.contact.socialMediaHandles.facebook} target="_blank" rel="noopener noreferrer">
          <div className="p-[10px] shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] bg-white rounded-[14px] group hover:bg-brim-blue hover:scale-105 transition-all duration-300">
            <svg
              className="text-brim-blue/80 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.6l.4-4H14V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          </a>
          <a href={contactData.contact.socialMediaHandles.x} target="_blank" rel="noopener noreferrer">
          <div className="p-[10px] shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] bg-white rounded-[14px] group hover:bg-brim-blue hover:scale-105 transition-all duration-300">
            <svg
              className="text-brim-blue/80 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1a9.09 9.09 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.12A12.94 12.94 0 0 1 3 2.1a4.48 4.48 0 0 0 1.4 6 4.41 4.41 0 0 1-2-.55v.05a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2 .08 4.53 4.53 0 0 0 4.21 3.13A9.06 9.06 0 0 1 2 19.54a12.92 12.92 0 0 0 7 2.05c8.4 0 13-7 13-13 0-.2 0-.42-.02-.63A9.32 9.32 0 0 0 23 3z" />
            </svg>
          </div>
          </a>
          <a href={contactData.contact.socialMediaHandles.instagram} target="_blank" rel="noopener noreferrer">
          <div className="p-[10px] shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] bg-white rounded-[14px] group hover:bg-brim-blue hover:scale-105 transition-all duration-300">
            <svg
              className="text-brim-blue/80 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          </a>
          <a href={contactData.contact.socialMediaHandles.linkedIn} target="_blank" rel="noopener noreferrer">
          <div className="p-[10px] shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] bg-white rounded-[14px] group hover:bg-brim-blue hover:scale-105 transition-all duration-300">
            <svg
              className="text-brim-blue/80 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          </a>
        </div>
      </div>
    </div>
  </section>
}

export default ContactInformation