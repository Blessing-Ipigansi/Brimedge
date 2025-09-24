import { useState, useEffect } from 'react'

function BgSlideshow({ backgroundImages }) {
  const [bg, setBg] = useState((backgroundImages)? backgroundImages[0]: undefined) 

  useEffect(() => {
    const bgTimeoutId = setTimeout(() => {
      if (backgroundImages) {
        setBg((prev) => {
          let i = backgroundImages.indexOf(prev)
          return (backgroundImages[i+1])? backgroundImages[i+1]: backgroundImages[0]
        })
      }  
    }, 5000) 

    return () => {
      clearTimeout(bgTimeoutId)
    }
  }, [bg])

  return <>{(backgroundImages) && <>
  <div style={{backgroundImage: `url("${bg}")`}} className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center transition-all duration-2000 ease-in-out transform scale-105"></div>
  {
  (backgroundImages.length <= 5) && 
  <div className='absolute bottom-[32px] right-[31px] flex space-x-2 z-20'>
    {backgroundImages.map((imgUrl, i) => {
      return (backgroundImages.indexOf(bg) === i)?
      <button key={crypto.randomUUID()} className='w-3 h-3 rounded-full transition-all duration-300 bg-edge-green scale-125'></button>:
      <button key={crypto.randomUUID()} onClick={() => setBg(imgUrl)} className='w-3 h-3 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50'></button>
    })}
  </div>
  }
  </>}</>
}

export default BgSlideshow
