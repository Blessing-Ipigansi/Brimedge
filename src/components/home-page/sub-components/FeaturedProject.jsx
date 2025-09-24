import { HashLink } from 'react-router-hash-link'
import { useState, useEffect} from 'react'

function FeaturedProject({ content, bgChanger }) {
  const { title, location, link, img } = content
  const [changeBackground, setChangeBackground] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (changeBackground) bgChanger(img)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [changeBackground])

  return  <div>
    <div className="bg-white/15 rounded-[17px] p-[1px] transition-all duration-500 hover:scale-105"
         onMouseEnter={() => { setChangeBackground(true) }}
         onMouseLeave={() => { setChangeBackground(false) }}
    >
      <HashLink to={link} className="w-full relative group">
        <img className='w-full rounded-t-[14px] border-b-4 border-black/0 transition-all duration-500 group-hover:blur-md' src={img} alt=""/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full p-6 text-white/70 transition-all translate-x-[40px] group-hover:bg-white/15 group-hover:translate-x-0 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play opacity-0 group-hover:opacity-70 group-hover:translate-x-0 translate-x-[60px] transition-all duration-500"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          </div>
        </div>
      </HashLink>
      <div className="px-4 py-4 flex flex-col justify-end bg-gradient-to-br from-gray-100/90 via-gray-100/85 to-white/80 items-center rounded-b-[14px]">
        <HashLink to={link}>
          <p className="text-[22px] font-semibold mb-2 text-center text-gray-700 tracking-[0.4px] transition-all duration-500 hover:text-accent-blue hover:scale-105"
              style={{textShadow: '-1.5px 1.5px 0 rgba(150, 150, 150, 0.4)'}}
          >
            { title }</p>
        </HashLink>
        <p className="text-[16px] text-gray-700 text-center">
          { location }</p>
      </div>
    </div>
  </div>
}

export default FeaturedProject
