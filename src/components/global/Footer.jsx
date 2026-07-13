import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
// import { contact } from '../../assets/simulateCMS.js' // Replace with redux
// import { footer } from '../../assets/simulateCMS.js' // Replace with redux
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../context/GlobalContext"


function Footer() {
  const { getFields } = useContext(GlobalContext)
  const [ content, setContent ] = useState({
    contact: {
      socialMediaHandles: {
        facebook: "/",
        x: "/",
        instagram: "/",
        linkedIn: "/",
        youtube: "/"
      }
    },
    footer: {
      termsOfServiceLink: "/",
      privacyPolicyLink: "/"
    }
  })
  const {contact, footer} = content

  useEffect(() => {
    getFields('contact', 'footer')
    .then( data => { setContent(data) } )
  }, [])

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return <footer className='relative overflow-hidden shadow-'>

    <div className='absolute inset-0 bg-dark-blue'></div>
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.02),transparent_70%)]'></div>
    <div className='max-w-[1600px] mx-auto px-4 md:px-10 lg:px-14 py-4 relative z-10'>
      <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-y-4">
        <div className="flex items-center space-x-[20px] xl:space-x-[22px] mr-8">
          <a href={contact.socialMediaHandles.facebook} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-full flex items-center justify-center">
              <svg
                  className="text-gray-200 group-hover:text-edge-green w-[30px] xl:w-[35px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Facebook"
              >
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
              </svg>
            </div>
          </a>
          <a href={contact.socialMediaHandles.x} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-full flex items-center justify-center">
              <svg
                  className="text-gray-200 group-hover:text-edge-green w-[30px] xl:w-[35px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Twitter"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 5.16a4.28 4.28 0 001.32 5.71 4.23 4.23 0 01-1.94-.53v.05a4.28 4.28 0 003.44 4.2 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.97A8.6 8.6 0 013 19.55 12.1 12.1 0 009.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.36 8.36 0 0022.46 6z" />
              </svg>
            </div>
          </a>
          <a href={contact.socialMediaHandles.instagram} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-full flex items-center justify-center">
              <svg
                  className="text-gray-200 group-hover:text-edge-green w-[30px] xl:w-[35px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Instagram"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
              </svg>
            </div>
          </a>
          <a href={contact.socialMediaHandles.linkedIn} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-full flex items-center justify-center">
              <svg
                  className="text-gray-200 group-hover:text-edge-green w-[30px] xl:w-[35px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="LinkedIn"
              >
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4v12H3v-12zm7 0h3.6v1.7h.1a3.9 3.9 0 013.5-2c3.7 0 4.4 2.4 4.4 5.5v6.8h-4v-6c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4v6.1H10v-12z" />
              </svg>
            </div>
          </a>
          <a href={contact.socialMediaHandles.youtube} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-full flex items-center justify-center">
              <svg
                  className="text-gray-200 group-hover:text-edge-green w-[30px] xl:w-[35px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="YouTube"
              >
                <path d="M21.6 7.2c-.2-1.2-1.2-2.1-2.4-2.3C17.1 4.5 12 4.5 12 4.5s-5.1 0-7.2.4A2.7 2.7 0 002.4 7.2 28.5 28.5 0 002 12c0 1.7.2 3.4.4 4.8.2 1.2 1.2 2.1 2.4 2.3 2.1.4 7.2.4 7.2.4s5.1 0 7.2-.4a2.7 2.7 0 002.4-2.3c.2-1.4.4-3.1.4-4.8 0-1.7-.2-3.4-.4-4.8zM10 15V9l5 3-5 3z" />
              </svg>
            </div>
          </a>
          <Link to="/contact">
            <div className="group rounded-full flex items-center justify-center">
              <svg
                  className="text-gray-200 group-hover:text-edge-green w-[30px] xl:w-[35px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Email"
              >
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01l8 5 8-5V6H4zm0 2.24V18h16V8.24l-8 5-8-5z" />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex gap-4 text-gray-200 flex-wrap justify-end">
          <HashLink to={footer.termsOfServiceLink} className="whitespace-nowrap">
            Terms of Service</HashLink>
          <HashLink to={footer.privacyPolicyLink} className="whitespace-nowrap">
            Privacy Policy</HashLink>
          <p className="text-gray-400 whitespace-nowrap">
            © {new Date().getFullYear()} Brimedge. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer
