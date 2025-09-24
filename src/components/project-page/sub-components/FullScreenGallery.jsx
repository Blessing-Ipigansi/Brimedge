import { useState } from 'react'

function FullScreenGallery({ cancel, pictures }) {
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

  return <div className="fixed h-full w-full bg-black z-[100] top-0 left-0 py-2 flex items-center justify-center">
    <img src={pictures[position]} alt=""
      className='w-full h-full object-contain'
    />
    <div className='absolute inset-0 grid grid-cols-2 items-center'>
        <button onClick={backward} className='opacity-30 hover:opacity-100 transition-all duration-300 w-full h-full'>
          <svg width='68' height='68' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='[filter:drop-shadow(0_0_4px_rgba(0,0,0,0.7))]'><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={forward} className='opacity-30 hover:opacity-100 transition-all duration-300 w-full h-full flex items-center justify-end '>
          <svg width='68' height='68' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='[filter:drop-shadow(0_0_4px_rgba(0,0,0,0.7))]'><polyline points="9 18 15 12 9 6" /></svg>
        </button>
    </div>
    <div className='absolute inset-0 text-gray-100 p-3 pointer-events-none flex items-start lg:items-end'>
      {position + 1} of {pictures.length}
    </div>
    <div className='absolute inset-0 pointer-events-none p-3 flex justify-end items-start'>
      <button onClick={() => cancel(false)} className='rounded-[4px] bg-black/60 p-2 pointer-events-auto hover:text-edge-green text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x block h-7 w-7"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
      </button>
    </div>
  </div>
}

export default FullScreenGallery
