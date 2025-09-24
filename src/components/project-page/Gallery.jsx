import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import FullScreenGallery from './sub-components/FullScreenGallery.jsx'

function Gallery({ pictures }) {
  const [position, setPosition] = useState(0)
  const forward = () => {
    setPosition((prev) => {
      if (pictures[prev+1]) return prev + 1
      else return 0
    })
  }
  const backward = () => {
    setPosition((prev) => {
      if (prev === 0) return pictures.length -1
      else return prev - 1
    })
  }

  useEffect(() => {
    const slideShowTimeout = setTimeout(() => { 
      forward()
    }, 11500)

    return () => {
      clearTimeout(slideShowTimeout)
    }
  }, [position])

  const [expandGallery, setExpandGallery] = useState(false)

  return <div className='mb-5'>
    {(expandGallery) && <FullScreenGallery cancel={setExpandGallery} pictures={pictures} />}
    <div className="flex items-center justify-center relative mx-[-16px] mt-[-8px] lg:mx-0 lg:mt-0">{
      <>
      <div className="absolute inset-0 bg-black/10 rounded-md"></div>
      <div className="absolute inset-0 bg-[url('/Pattern-export.svg')] rounded-md"></div>
      <AnimatePresence mode="popLayout">
        {(position%2 === 0) &&
        <motion.img loading='lazy' key={'projectType1SliderPt1'} src={pictures[position]} className="relative lg:rounded-md w-full aspect-[900/506] object-cover"
          initial={{ opacity: 0}}
          animate={{ opacity: 1, transition: {duration: 0.3}}}
          exit={{ filter: "brightness(1000%)", transition: {ease: 'easeInOut', duration: 0.3} }}
        />}
        {(position%2 === 1) &&
        <motion.img loading='lazy' key={'projectType1SliderPt2'} src={pictures[position]} className="relative lg:rounded-md w-full aspect-[900/506] object-cover"
          initial={{ opacity: 0}}
          animate={{ opacity: 1, transition: {duration: 0.3}}}
          exit={{ filter: "brightness(1000%)", transition: {ease: 'easeInOut', duration: 0.3} }}
        />}
      </AnimatePresence>
      <div className='absolute inset-0 grid grid-cols-2 items-center'>
        <button onClick={backward} className='opacity-30 hover:opacity-100 transition-all duration-300 w-full h-full'>
          <svg width='80' height='80' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='[filter:drop-shadow(0_0_4px_rgba(0,0,0,0.7))]'><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={forward} className='opacity-30 hover:opacity-100 transition-all duration-300 w-full h-full flex items-center justify-end '>
          <svg width='80' height='80' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='[filter:drop-shadow(0_0_4px_rgba(0,0,0,0.7))]'><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
      </>
    }</div>
    <div className='flex items-center px-4 lg:px-0'>
      <span className='font-light scale-x-90 text-[14px] lg:text-[16px]'>{position+1} of {pictures.length}</span>
      <div className='ml-auto'>
        {(pictures.length < 15) && <div className='space-x-[11px] flex items-center'>{
          pictures.map((pic, i) =>   
            (i === position)? <div key={crypto.randomUUID()} className='bg-edge-green w-[11px] h-[11px] lg:w-[13px] lg:h-[13px] rounded-full transition-colors'></div>
            : <div key={crypto.randomUUID()} className='bg-gray-300 w-[11px] h-[11px] lg:w-[13px] lg:h-[13px] rounded-full'></div>
          )
        }</div>}
      </div>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button onClick={() => setExpandGallery(true)} className='ml-4'>
              <motion.svg width={40} height={40} className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]" viewBox="0 0 24 24" fill="none" stroke={"black"} strokeWidth="1.5"
                initial='rest'
                whileHover='hover'
              >
                {/* Top-left arrowhead */}
                <motion.polyline points="6 10, 6 6, 10 6" 
                  variants={{
                    rest: { translateX: 0, translateY: 0 },
                    hover: { translateX: -1.2, translateY: -1.2, transition: {ease: 'easeOut'} }
                  }}
                />
                {/* Top-right arrowhead */}
                <motion.polyline points="14 6, 18 6, 18 10" 
                  variants={{
                    rest: { translateX: 0, translateY: 0 },
                    hover: { translateX: 1.2, translateY: -1.2, transition: {ease: 'easeOut'} }
                  }}
                />
                {/* Bottom-right arrowhead */}
                <motion.polyline points="18 14, 18 18, 14 18"
                  variants={{
                    rest: { translateX: 0, translateY: 0 },
                    hover: { translateX: 1.2, translateY: 1.2, transition: {ease: 'easeOut'} }
                  }}
                />
                {/* Bottom-left arrowhead */}
                <motion.polyline points="10 18, 6 18, 6 14"
                  variants={{
                    rest: { translateX: 0, translateY: 0 },
                    hover: { translateX: -1.2, translateY: 1.2, transition: {ease: 'easeOut'} }
                  }}
                />
              </motion.svg>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="bottom"
              align="center"
              className="bg-gray-700 text-white text-sm px-3 py-1 rounded shadow"
              sideOffset={5}
            >
              expand image
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  </div>
}

export default Gallery
