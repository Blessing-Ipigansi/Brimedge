import RatingStars from '../global/RatingStars'
import { aboutHero } from '../../assets/simulateCMS'
import { brimedgeStats } from '../../assets/simulateCMS' // Replace with redux

function Hero() {
  const mainText = {
    pt1: [],
    pt2: [],
    pt3: []
  }
  aboutHero.mainText.split(' ').forEach((word, i, arr) => {
    ((100/arr.length)*(i+1) < 41)? mainText.pt1.push(word + ' '): 
    ((100/arr.length)*(i+1) > 59)? mainText.pt3.push(word + ' '):
    mainText.pt2.push(word + ' ')
  })


  return <section id='hero'>
    <div className="relative md:h-[100vh] md:max-h-[1100px] w-full overflow-hidden">
      <div className='absolute inset-0'>
        <video preload='none' autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={aboutHero.video.mp4} type='video/mp4'/>
          <source src={aboutHero.video.webm} type='video/webm'/>
          <source src={aboutHero.other}/>
        </video>
      </div>
      <div className="inset-0 absolute bg-gradient-to-r from-[#5969FF]/10 to-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-black/10 to-[rgba(0,0,0,0.3)]"></div>
      <div className="flex flex-col justify-end max-w-[1600px] h-full w-full mx-auto relative">
        <div className="flex flex-col gap-5 px-5 pb-[52px] pt-[210px]">
          <div className="hidden xs:flex space-x-5 pl-[2px]">
            <div className="flex items-center rounded-full py-[6px] px-3 border-[1px] border-white/20 bg-brim-blue/70 text-white text-xs">
              <p>Average Ratings:</p>
              <div className='pl-2 flex space-x-1'>
                <RatingStars rating={brimedgeStats.avgClientRating} size={10}/>
              </div>
            </div>
            <div className="flex items-center rounded-full py-[6px] px-3 border-[1px] border-white/20 bg-brim-blue/70 text-white text-xs">
              { aboutHero.tag2 }
            </div>
          </div>
          <h3 className="text-gray-100 text-4xl font-oswald md:text-5xl lg:text-6xl lg:max-w-[850px] scale-y-95"
            style={{ textShadow: '-2px 2px 0px rgb(80,80,80)' }}
          >
            { mainText.pt1 }<span className='relative'>
              <span className='font-playfair italic'>{ mainText.pt2 }</span>
              {/* <span style={{ textShadow: '0 0 0 #ffffff00' }} className='font-playfair italic bg-gradient-to-r to-edge-green from-gray-100 bg-clip-text text-transparent'>{ mainText.pt2 }</span> */}
            </span>{mainText.pt3}
          </h3>
        </div>
      </div>
    </div>
  </section>
}

export default Hero
