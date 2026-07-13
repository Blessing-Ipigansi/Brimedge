// import { aboutFounder } from "../../assets/simulateCMS" // Replace with CMS
import { useContext, useRef, useState, useEffect } from "react"
import AboutContext from "../../context/AboutContext.jsx"

function Founder() {
  const { getFields } = useContext(AboutContext)
  const [ content, setContent ] = useState({
    aboutFounderHeading: "",
    aboutFounderFromOurFounder: [],
    aboutFounderName: "",
    aboutFounderPortrait: "",
    aboutFounderPortaitFront: ""
  })

  const portraitRef = useRef(null)
  const portraitFrontRef = useRef(null)
  const [portraitObj, setPortraitObj] = useState({ x: 0, y: 0, w: 0, h: 0 })
  const setObj = (event) => {
    const imgRect = portraitRef.current.getBoundingClientRect()
    setPortraitObj({ 
      x: event.clientX - imgRect.left,
      y: event.clientY - imgRect.top,
      w: imgRect.width,
      h: imgRect.height
    })
  }
  const portraitRotation = 12

  useEffect(() => {
    getFields('aboutFounderHeading', 'aboutFounderFromOurFounder', 'aboutFounderName',
      'aboutFounderPortrait', 'aboutFounderPortraitFront')
    .then( data => { setContent(data) } )

    if (portraitRef.current) portraitRef.current.addEventListener("mousemove", setObj)

    return () => {
      if (portraitRef.current) portraitRef.current.removeEventListener("mousemove", setObj)
    }
  }, [portraitObj])

  if (content.isError) {
    const errorMessage = "There was a problem fetching the content for the home page"
    const errorName = "Failed to Fetch"
    const fetchError = new Error(errorMessage)
    fetchError.name = errorName
    throw fetchError
  } // Throw error if data fetching from contentful is unsuccessful
  return (
    <section className="bg-[url('/Pattern-export.svg')]">
      <div className="max-w-[1600px] px-4 md:px-10 mx-auto py-14">
        <div className="grid xl:grid-cols-[2fr_1.5fr]">
          <div className="xl:pr-16">
            <span className="bg-white-bg-green/90 text-white text-[14px] md:text-[16px] py-[2px] px-3 font-semibold tracking-widest rounded-full whitespace-nowrap">
              BRIMEDGE
            </span>
            <h3 className="relative text-5xl md:text-6xl text-brim-blue mb-11 mt-6 font-oswald font-bold">
              <span className="absolute">{content.aboutFounderHeading}</span>
              <span
                className="[-webkit-text-stroke:2px_#fff]"
                style={{ textShadow: "-2.5px 2px 0 lightgray" }}
              >
                {content.aboutFounderHeading}
              </span>
            </h3>
            {content.aboutFounderFromOurFounder.map((para) => {
              return (
                <p
                  key={crypto.randomUUID()}
                  className="mb-8 text-gray-700 text-[15px] leading-6"
                >
                  {para}
                </p>
              );
            })}
            <p className="font-bold italic mt-[-4px]">{content.aboutFounderName}</p>
            <p className="italic">Founder, Brimedge Nig Ltd</p>
          </div>
          <div className="xl:justify-self-end justify-self-center">
            <div
              className="mt-10 xl:mt-0 sticky top-0 group"
              style={{ perspective: "1200px" }}
            >
              <div className="absolute inset-0 shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)]"></div>
              <img
                loading="lazy"
                ref={portraitRef}
                src={content.aboutFounderPortrait}
                alt="Portrait of our founder"
                className="relative shadow-[0_4px_50px_rgba(0,0,0,0.1)] aspect-[600/750] object-cover hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)]"
                style={{
                  transform: `rotateY(${
                    portraitObj.x / (portraitObj.w / portraitRotation) -
                    portraitRotation / 2
                      ? portraitObj.x / (portraitObj.w / portraitRotation) -
                        portraitRotation / 2
                      : 0
                  }deg) rotateX(${
                    portraitObj.y / (portraitObj.h / portraitRotation) -
                    portraitRotation / 2
                      ? -(
                          portraitObj.y / (portraitObj.h / portraitRotation) -
                          portraitRotation / 2
                        )
                      : 0
                  }deg)`,
                  transition: "transform 0s",
                }}
                onMouseLeave={() => {
                  portraitFrontRef.current.style.transform =
                    "rotateY(0deg) rotateX(0deg)";
                  portraitRef.current.style.transform =
                    "rotateY(0deg) rotateX(0deg)";
                  portraitFrontRef.current.style.filter = "none";
                  portraitFrontRef.current.style.opacity = "1";
                  portraitFrontRef.current.style.transition =
                    "transform 0.45s ease-in-out, filter 0.4s, opacity 0.9s";
                  portraitRef.current.style.transition =
                    "transform 0.45s ease-in-out";
                }}
                onMouseEnter={() => {
                  portraitFrontRef.current.style.filter =
                    "blur(8px) contrast(150%) hue-rotate(30deg)";
                  portraitFrontRef.current.style.opacity = "0";
                  portraitFrontRef.current.style.transition =
                    "transform 0.1s ease-in-out, filter 0.4s, opacity 0.9s";
                  portraitRef.current.style.transition =
                    "transform 0.1s ease-in-out";
                }}
              />
              <div
                ref={portraitFrontRef}
                className="absolute inset-0 bg-cover bg-center warp-effect"
                style={{
                  backgroundImage: `url('${content.aboutFounderPortraitFront}')`,
                  transform: `rotateY(${
                    portraitObj.x / (portraitObj.w / portraitRotation) -
                    portraitRotation / 2
                      ? portraitObj.x / (portraitObj.w / portraitRotation) -
                        portraitRotation / 2
                      : 0
                  }deg) rotateX(${
                    portraitObj.y / (portraitObj.h / portraitRotation) -
                    portraitRotation / 2
                      ? -(
                          portraitObj.y / (portraitObj.h / portraitRotation) -
                          portraitRotation / 2
                        )
                      : 0
                  }deg)`,
                  transition: "transform 0s, opacity 0.45s ease",
                  pointerEvents: "none",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder
