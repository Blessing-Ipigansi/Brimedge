import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useContext, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
// import { contact } from '../../assets/simulateCMS' // Replace with redux
// import { navbar } from '../../assets/simulateCMS' // Replace with redux
// import { logo } from '../../assets/simulateCMS' // Replace with redux
import GlobalContext from '../../context/GlobalContext.jsx'

function Header() {
  const { getFields } = useContext(GlobalContext);
  const [content, setContent] = useState({ isLoading: true });
  const { logo, contact, navbar } = 
  (content.logo && content.contact && content.navbar)
  ?
  {
    "logo": {
      dark: content.logo[0],
      darkHalf: content.logo[1],
      light: content.logo[2],
      lightHalf: content.logo[3]
    },
    "contact": content.contact,
    "navbar": content.navbar
  }
  :
  {
    "logo": {
      brimedgeLogoDark: "",
      brimedgeLogoDarkHalf: "",
      brimedgeLogoLight: "",
      brimedgeLogoLightHalf: ""
    },
    "contact": {
      "email": [
        "@email.com",
        "@email.com"
      ],
      "phone": [
          "+",
          "+"
      ],
      "location": "",
      "workingHours": [
          "AM - PM",
          "AM - PM",
          "AM - PM"
      ],
      "socialMediaHandles": {
          "x": "https://x.com/",
          "youtube": "https://www.youtube.com",
          "facebook": "https://web.facebook.com/",
          "linkedIn": "https://www.linkedin.com/",
          "instagram": "https://instagram.com/"
      }
    },
    "navbar": {
      "p1": "",
      "p2": "",
      "p3": ""
    }
  }

  const [mobileNav, setMobileNav] = useState(false)
  
  const page = useLocation().pathname
  const styleTriggerRef = useRef(null)
  const [atTopOfPage, setAtTopOfPage] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setAtTopOfPage(entry.isIntersecting), { root: null })
    if (styleTriggerRef.current) observer.observe(styleTriggerRef.current)

    getFields(
      "logo",
      "contact",
      "navbar"
    ).then((data) => {
      setContent(data);
    })
    
    return () => {
      observer.disconnect()
    }
  }, [])

  return <>
  <div ref={styleTriggerRef}></div>
  <nav className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'bg-transparent absolute top-0 left-0 right-0 z-40 transition-all duration-500': (page !== '/projects' && page !== '/contact')? 'bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-40 transition-all duration-500 border-b border-gray-100': 'bg-white/95 backdrop-blur-md top-0 z-40 transition-all duration-500 border-b border-gray-100'}>
    <div style={(atTopOfPage && (page==='/' || page==='/about-us'))? {display: 'none'}: (atTopOfPage && (page !== '/projects'))? {padding: '4px 0'}: {padding: '2px 0'}} className='bg-brim-blue text-white transition-all duration-500'>
      <div className='max-w-[1400px] mx-auto px-4'>
        <div className='flex justify-between items-center text-sm'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>{ contact.phone[0] }</span>
            </div>
            <div className='hidden md:flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <span>{ contact.email[0] }</span>
            </div>
          </div>
          <div className='hidden md:block text-edge-green font-medium'>
            { navbar.p1 }
          </div>
        </div>
      </div>
    </div>
    <div className={(atTopOfPage && page==='/about-us')? 'absolute h-[58x] w-full bg-black/20 shadow-about-page-header': 'absolute'}>
    </div>
    <div className='relative max-w-[1400px] mx-auto px-4'>
      <div style={(atTopOfPage && (page !== '/projects'))? {height: '60px'}: {height: '44px'}} className='flex items-center justify-between transition-all duration-500'>
        <div className='flex-shrink-0'>
          <HashLink to="/#page-top" className='flex items-center group'>
            <div className={(atTopOfPage && (page !== '/projects'))? 'brimedge-logo text-2xl font-bold': 'brimedge-logo text-xl font-bold'}>
              <img loading='lazy' src={(atTopOfPage && (page==='/' || page==='/about-us'))? logo.dark: (atTopOfPage && (page !== '/projects'))? logo.light: logo.lightHalf} className={(atTopOfPage && (page !== '/projects'))? 'h-[42px] md:h-[50px]': 'h-[36px]'} />
            </div>
            <div className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'ml-3 text-white/80 text-sm hidden xl:block group-hover:text-edge-green transition-all duration-300 ': (atTopOfPage && (page !== '/projects'))? 'ml-3 text-gray-600 text-sm hidden xl:block group-hover:text-edge-green transition-all duration-300 ': 'ml-3 text-gray-600 text-sm hidden xl:block group-hover:text-edge-green transition-all duration-300 scale-90'}>
              <div className='font-medium'>{ navbar.p2 }</div>
              <div className='text-xs'>{ navbar.p3 }</div>
            </div>
          </HashLink>
        </div>
        <div className='hidden lg:block'>
          <div className='ml-10 flex items-center space-x-8'>
            <HashLink to='/#page-top' className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'text-white hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': (atTopOfPage && (page !== '/projects'))? 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group text-[12px]'}>
              <span>Home</span>
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-edge-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
            </HashLink>
            <HashLink to='/about-us#page-top' className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'text-white hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': (atTopOfPage && (page !== '/projects'))? 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group text-[12px]'}>
              <span>About</span>
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-edge-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
            </HashLink>
            <HashLink smooth to='/about-us#what-we-do' className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'text-white hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': (atTopOfPage && (page !== '/projects'))? 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group text-[12px]'}>
              <span>Services</span>
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-edge-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
            </HashLink>
            <HashLink to='/projects#projects-page' className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'text-white hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': (atTopOfPage && (page !== '/projects'))? 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group text-[12px]'}>
              <span>Projects</span>
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-edge-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
            </HashLink>
            <HashLink to='/contact#page-top' className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'text-white hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': (atTopOfPage && (page !== '/projects'))? 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ': 'text-gray-800 hover:text-edge-green px-3 py-2 rounded-md font-medium transition-all duration-300 relative group text-[12px]'}>
              <span>Contact</span>
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-edge-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
            </HashLink>
          </div>
        </div>
        <div className='hidden lg:block'>
          <HashLink to='/contact#page-top' className={(atTopOfPage && (page==='/' || page==='/about-us'))? 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border h-10 bg-transparent text-white border-white/30 hover:bg-white hover:text-brim-blue backdrop-blur-sm px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300': (atTopOfPage && (page !== '/projects'))? 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-gradient-to-r from-[#03045E] to-[#0003D1] hover:from-[#0003D1] hover:to-[#03045E] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300': 'inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-[#03045E] to-[#0003D1] hover:from-[#0003D1] hover:to-[#03045E] text-white px-4 py-2 text-sm rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'}>
            Get Quote
          </HashLink>
        </div>
        <div className='lg:hidden'>
          <button onClick={() => setMobileNav(prev => !prev)} className={(atTopOfPage && (page==='/' || page==='/about-us'))?'inline-flex items-center justify-center p-3 rounded-full text-white hover:text-edge-green hover:bg-gray-100/20 transition-all duration-300': 'inline-flex items-center justify-center p-3 rounded-full text-gray-800 hover:text-edge-green hover:bg-gray-100/20 transition-all duration-300'}>
            {
              (mobileNav) ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x block h-6 w-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu block h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            }
          </button>
        </div>
      </div>
    </div>
    {
      (mobileNav) &&
      <div onClick={() => setMobileNav(false)} className='lg:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100'>
        <div className='px-4 pt-4 pb-6 space-y-2'>
          <HashLink to='/#page-top' className='block px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brim-blue transition-all duration-300'>
            Home</HashLink>
          <HashLink to='/about-us#page-top' className='block px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brim-blue transition-all duration-300'>
            About</HashLink>
          <HashLink smooth to='/about-us#what-we-do' className='block px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brim-blue transition-all duration-300'>
            Services</HashLink>
          <HashLink to='/projects#projects-page' className='block px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brim-blue transition-all duration-300'>
            Projects</HashLink>
          <Link to='/contact#page-top' className='block px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brim-blue transition-all duration-300'>
            Contact</Link>
          <div className='pt-4'>
            <HashLink to='/contact#page-top' className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full bg-brim-blue hover:bg-accent-blue text-white py-3 rounded-xl font-semibold shadow-lg'>
              Get a Quote</HashLink>
          </div>
        </div>
      </div>
    }
  </nav>
  </>
}

export default Header
