import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import HomeContext from '../context/HomeContext'
import ProjectsContext from '../context/ProjectsContext'
import GlobalContext from '../context/GlobalContext'

function ReactContentfulTutorial() {
  const { getFields } = useContext(GlobalContext);
  const [content, setContent] = useState({ isLoading: true });

  const typeOfData = (data) => {
    const types = {}
    Object.entries(data).forEach(pair => {
      types[pair[0]] = typeof pair[1]
    })
    return types
  }
  
  useEffect(() => {
    getFields(
        "entryName",
        "metaData",
        "logo",
        "contact",
        "navbar",
        "footer",
        "callToAction").then((data) => {
      setContent(data);
    });
  }, [])

  return <main>
    <section className='h-[100vh] w-full'>
      <div className='flex flex-col items-center font-playfair px-4 h-full'>
        <h1 className='text-[30px] lg:text-[40px] xl:text-[60px] font-bold font-lobster mt-10 mb-5'>Using React With Contentful</h1>
        <p className='font-lobster lg:text-[18px]'>
          Learning how to use the Contentful SDK with React for the brimedge project.</p>
        <div className='flex flex-1 py-4 w-full overflow-x-auto'>
            <textarea className='border-none outline-none w-full font-quicksand font-semibold text-[18px] text-edge-green bg-gray-800 p-4 rounded-[6px]' 
              readOnly value={ JSON.stringify(content, null, "\t") } />
        </div>
        <Link to="/react-state-tutorial" className="p-[14px] mb-4 border-[2px] font-bold border-gray-400 bg-gray-900 rounded-md text-white">
          React State Tutorial Page</Link>
      </div>
    </section>
  </main>
}

export default ReactContentfulTutorial
