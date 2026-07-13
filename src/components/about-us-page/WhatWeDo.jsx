// import { aboutServices } from "../../assets/simulateCMS" // Replace with Redux CMS
import DescriptionCard from "./cards/DescriptionCard"
import { useContext, useState, useEffect } from 'react'
import AboutContext from "../../context/AboutContext.jsx"

function WhatWeDo() {
  const { getFields } = useContext(AboutContext)
  const [ content, setContent ] = useState({
    aboutServicesHeading: "",
    aboutServicesIntroParagraph: "",
    aboutServicesService: [
      {
        img: "",
        title: "",
        description: ""
      }
    ]
  })

  useEffect(() => {
    getFields('aboutServicesHeading', 'aboutServicesIntroParagraph', 'aboutServicesService')
    .then( data => { setContent(data) } )
  }, [])

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return (
    <section id="what-we-do" className="relative overflow-hidden">
      <div className="max-w-[1600px] px-4 md:px-10 py-16 mx-auto">
        <div className="absolute inset-0 bg-[url('/Pattern-export.svg')]"></div>
        <div className="relative grid mb-10">
          <div className="justify-self-center relative">
            <span
              className="text-5xl md:text-6xl font-oswald font-bold tracking-[1.5px] [-webkit-text-stroke:2px_white]"
              style={{ textShadow: "-2.5px 2px 0 lightgray" }}
            >
              {content.aboutServicesHeading}
            </span>
            <span className="absolute inset-0 text-5xl text-brim-blue md:text-6xl font-oswald font-bold tracking-[1.5px]">
              {content.aboutServicesHeading}
            </span>
          </div>
          <div className="justify-self-center max-w-[1100px] mt-4">
            <p className="text-center text-gray-700">
              {content.aboutServicesIntroParagraph}
            </p>
          </div>
        </div>
        <div className="relative grid sm:grid-cols-2 xl:grid-cols-3 place-items-start gap-[34px]">
          {content.aboutServicesService.map((serviceObj) => (
            <DescriptionCard
              key={serviceObj.title}
              title={serviceObj.title}
              description={serviceObj.description}
              img={serviceObj.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo
