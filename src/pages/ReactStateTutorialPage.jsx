import {Link} from "react-router-dom"
import { useState, useEffect, useRef } from 'react'

function ReactStateTutorialPage() {
  const hideLayout = () => {
    const header = document.querySelector('nav')
    header.style.display = "none"
    const footer = document.querySelector('footer')
    footer.style.display = "none"
  }

  const [state, setState] = useState(0)
  const idRef = useRef(null)
  const setSetState = () => {
    setTimeout(() => {
      setState(prev => prev + 1 )
    }, 3000)
    setState(prev =>  prev + 1 )
  }

  useEffect(() => {
    hideLayout()
  }, [])

  return <main>
    <div className="h-[98vh] flex flex-col items-center justify-center md:p-4">
      <div className="grid grid-cols-2 w-full flex-1 rounded-[4px] overflow-hidden mb-[50px]">
        <div className="flex items-center justify-center w-full h-full text-2xl md:text-6xl">
          <button className="p-[26px] md:p-[40px] mb-4 border-[2px] font-semibold border-gray-400 bg-gray-900 rounded-[20px] text-white"
            onClick={setSetState}
          >
            Change State</button>
        </div>
        <div key={crypto.randomUUID()} ref={idRef} id='state' className="flex items-center justify-center w-full h-full bg-gray-50 text-[240px] md:text-[400px]">
          { state }
        </div>
      </div>
      <Link to="/contentful-tutorial" className="p-[14px] mb-4 border-[2px] font-bold border-gray-400 bg-gray-900 rounded-md text-white">
        Contentful Tutorial Page</Link>
    </div>
  </main>
}

export default ReactStateTutorialPage
