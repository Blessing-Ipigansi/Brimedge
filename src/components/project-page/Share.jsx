import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Share({ keepHidden, title, description }) {
  const [scroll_y, setScroll_y] = useState(false)
  const url = window.location.href

  const showShare = () => {
    if (window.scrollY <= 0) setScroll_y(false)
    else if (!keepHidden) setScroll_y(true)
    else setScroll_y(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", showShare)
    return () => {
      window.removeEventListener("scroll", showShare)
    }
  }, [scroll_y, keepHidden])

  return <div className="absolute inset-0 h-[100vh] w-full pointer-events-none">
    <div className="relative w-full h-full flex justify-center items-end">
      <AnimatePresence mode='popLayout'>
        {(scroll_y && !keepHidden) && 
        <motion.div className='fixed mb-6 rounded-full bg-white/90 px-6 py-3 border-[1px] border-gray-400/30 z-[100] shadow-[0_4px_10px_1px_rgba(0,0,0,0.06);] flex items-center justify-center'
          initial={{ y: 100 }}
          animate={{ y: 0, transition: {duration: 0.6, ease: 'easeInOut'} }}
          exit={{ y: 100, transition: {duration: 0.3, ease: 'easeOut'} }}
        >
          <div className='flex gap-[14px] text-gray-700 items-center justify-center pointer-events-auto'>
            <div className='flex items-center justify-center tracking-wider text-[18px] font-bold'>Share<span className='w-[28px] h-[3px] rounded-[1px] bg-gray-700 ml-[14px]'></span></div>
            <Link to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="hover:scale-110 hover:text-blue-600 transition-all duration-300" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9Zm-1.5-10.26a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 19h-3v-4.74c0-1.42-.6-2.16-1.76-2.16-1.16 0-1.74.78-1.74 2.16V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.8-1.5c2.07 0 3.3 1.34 3.3 4.24V19Z"></path></svg>
            </Link>
            <Link to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="hover:scale-110 hover:text-blue-600 transition-all duration-300" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </Link>
            <Link to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="hover:scale-110 hover:text-blue-600 transition-all duration-300" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
            </Link>
            <Link to={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description+' '+url)}`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="hover:scale-110 hover:text-blue-600 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" ry="2" /><polyline points="3 7 12 13 21 7" /></svg>
            </Link>
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  </div>
}

export default Share
