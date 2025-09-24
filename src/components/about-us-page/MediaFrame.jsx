import { aboutTeamSlideshow } from "../../assets/simulateCMS" // Replace with CMS
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function MediaFrame() {
  const size = aboutTeamSlideshow.length;
  const [next, setNext] = useState(0)

  useEffect(() => {
    const nextTimer = setTimeout(() => {
      setNext((prev) => {
        if (prev < size-1) return prev + 1
        else return 0
      })
    }, 7000)

    return () => {
      clearTimeout(nextTimer)
    }
  }, [next])

  return <section className="bg-gray-50 relative mb-4">
    <div className='z-10 absolute top-[-5px] w-full h-[10px] shadow-[0_0_15px_rgba(255,_255,_255,_0.4)] backdrop-blur-sm'></div>
    <div className="max-w-[1600px] mx-auto">
      <motion.div className="relative overflow-hidden shadow-frame"
        layout
        style={{ perspective: '1000px' }}
      >
        <AnimatePresence mode='popLayout'>
          {(next%2 === 0) &&
            <motion.img loading='lazy' key={1} src={aboutTeamSlideshow[next]} className="w-full aspect-[900/506] object-cover" 
              initial={{ rotateY: -90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 0.1, transition: {duration: 1.1} }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          }
          {(next%2 === 1) &&
            <motion.img loading='lazy' key={2} src={aboutTeamSlideshow[next]} className="w-full aspect-[900/506] object-cover" 
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 0.1 , transition: {duration: 1.1}}}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          }
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 flex items-center justify-center text-center text-4xl md:text-5xl lg:text-6xl text-white duration-1000">
          <div className="flex-col space-y-5 hover:text-white/70 duration-700">
            <p>Our People</p>
            <p className="text-center text-xl">Shaping the future of work</p>
          </div>
        </div>
        <div className="inset-0 absolute bg-gradient-to-r from-[#5969FF]/10 to-black/10"></div>
      </motion.div>
    </div>
    <div className='z-10 absolute bottom-[-5px] w-full h-[10px] shadow-[0_0_15px_rgba(255,_255,_255,_0.4)] backdrop-blur-sm'></div>
  </section>
}

export default MediaFrame
