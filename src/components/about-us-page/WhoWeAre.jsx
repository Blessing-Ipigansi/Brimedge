import RatingStars from "../global/RatingStars"
import { brimedgeStats } from "../../assets/simulateCMS" // Replace with redux
import { aboutUs } from "../../assets/simulateCMS" // Replcae with redux

function WhoWeAre() {
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
            { aboutUs.breif }
          </div>
          <div className="flex space-x-[10px] ml-[2px]">
            <RatingStars rating={brimedgeStats.avgClientRating} size={14} color={'#28af0d'} />
          </div>
        </div>
        <div className="lg:min-w-[500px] xl:min-w-[700px] text-gray-700 text-[15px] leading-6">
          <p className="text-black font-medium text-[16px] leading-[23px] mb-6 mt-6 lg:mt-0">
            { aboutUs.moreAboutUsIntro }
          </p>
          {aboutUs.moreAboutUsParagraphs.map((para) => {
            return <p key={crypto.randomUUID()} className="mb-8">{ para }</p>
          })}
          <p>
            <span style={{ display: 'inline-block', transform: 'scaleX(1.5)' }}>{'>'}</span><br />
            { aboutUs.moreAboutUsCTA }
          </p>
        </div>
      </div>
    </div>
  </section>
}

export default WhoWeAre
