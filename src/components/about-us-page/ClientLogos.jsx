import { aboutClientLogos } from "../../assets/simulateCMS" // Replace with redux\
import { useRef, useState, useEffect } from "react"

function ClientLogos() {
  const braceRef = useRef(null)
  const [ fits, setFits ] = useState(false)
  const doesItFit = () => {
    if (braceRef.current) {
      if (braceRef.current.offsetWidth < window.innerWidth) {
        setFits(true)
      } else setFits(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', doesItFit)
    doesItFit()

    return () => {
      window.removeEventListener('resize', doesItFit)
    }
  }, [fits])
  
  return <div className="w-full h-[60px] md:h-[70px] bg-black/90 shadow-black-blend relative pb-6 pt-2 overflow-hidden">
    <div className="absolute inset-0 pb-6 pt-2">
      <div className="absolute inset-0 mb-3 bg-white-bg-green/20"></div>
      <div className="relative h-full w-full">  
        <div className="w-full h-full bg-white-bg-green/20"></div>
      </div>
    </div>
    {(fits)? 
    <div className="absolute inset-0 pb-6 pt-2">
      <div className="flex justify-around px-4 h-full w-full">
        { aboutClientLogos.map(( logo, i ) => {
          return <img loading="lazy" key={`in-${i}`} src={logo} style={{ filter: 'brightness(1000%)' }} className="h-full"/>
        }) }
      </div>
    </div>
    :
    <></>
    }
    <div className="h-full flex w-max min-w-max relative">
      <div ref={braceRef} className="flex gap-20 px-9 h-full opacity-0">
        { aboutClientLogos.map(( logo, i ) => {
          return <img loading="lazy" key={`in-${i}`} src={logo} className="h-full"/>
        }) }
      </div>
      {(fits)? 
      <></>
      : 
      <>
        <div style={{ animation: 'intoView 30s linear infinite' }} className="flex gap-20 px-9 h-full absolute">
          { aboutClientLogos.map(( logo, i ) => {
            return <img loading="lazy" key={`in-${i}`} src={logo} className="h-full" style={{filter: 'brightness(0) invert(1)'}}/>
          }) }
        </div>
        <div style={{ animation: 'outOfView 30s linear infinite' }} className="flex gap-20 px-9 h-full absolute">
          { aboutClientLogos.map(( logo, i ) => {
            return <img loading="lazy" key={`in-${i}`} src={logo} className="h-full" style={{filter: 'brightness(0) invert(1)'}}/>
          }) }
        </div>
      </>
      }
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
  </div>
}
export default ClientLogos
