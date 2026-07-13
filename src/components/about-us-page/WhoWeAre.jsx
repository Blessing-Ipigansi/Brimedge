import RatingStars from "../global/RatingStars"
// import { aboutUs } from "../../assets/simulateCMS" // Replcae with redux
import { useContext, useState, useEffect } from 'react'
import AboutContext from "../../context/AboutContext.jsx"

function WhoWeAre() {
  const { getFields } = useContext(AboutContext)
  const [ content, setContent ] = useState({
    aboutUsBreif: "",
    aboutHeroAvgClientRating: 4.5,
    aboutUsMoreAboutUsIntro: "",
    aboutUsMoreAboutUsParagraphs: [ "", "" ],
    aboutUsMoreAboutUsCTA: ""
  })

  useEffect(() => {
    getFields('aboutUsBreif', 'aboutHeroAvgClientRating', 'aboutUsMoreAboutUsIntro',
      'aboutUsMoreAboutUsParagraphs', 'aboutUsMoreAboutUsCTA')
    .then( data => { setContent(data) } )
  }, [])

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return <section className="bg-gray-50 relative">
    <div className="px-4 md:px-10 pt-12 pb-14 w-full max-w-[1600px] mx-auto">
      <div className="flex mb-10 text-black/80 font-oswald font-semibold">
        <p className="scale-x-105 ml-[5px]">WHO WE ARE</p>
        <p className="ml-auto mr-[1px]">01</p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col flex-shrink lg:min-w-[400px] xl:max-w-[600px] lg:max-w-[400px] pr-16">
          <div className="mb-6">
            <span className="bg-white-bg-green/90 text-white py-[2px] px-3 font-semibold tracking-widest rounded-full whitespace-nowrap">
              BRIMEDGE</span>
          </div>
          <div className="font-semibold text-2xl mb-9 leading-10">
            { content.aboutUsBreif }
          </div>
          <div className="flex space-x-[10px] ml-[2px]">
            <RatingStars rating={content.aboutHeroAvgClientRating} size={14} color={'#28af0d'} />
          </div>
        </div>
        <div className="lg:min-w-[500px] xl:min-w-[700px] text-gray-700 text-[15px] leading-6">
          <p className="text-black font-medium text-[16px] leading-[23px] mb-6 mt-6 lg:mt-0">
            { content.aboutUsMoreAboutUsIntro }
          </p>
          {content.aboutUsMoreAboutUsParagraphs.map((para) => {
            return <p key={crypto.randomUUID()} className="mb-8">{ para }</p>
          })}
          <p>
            <span style={{ display: 'inline-block', transform: 'scaleX(1.5)' }}>{'>'}</span><br />
            { content.aboutUsMoreAboutUsCTA }
          </p>
        </div>
      </div>
    </div>
  </section>
}

export default WhoWeAre
