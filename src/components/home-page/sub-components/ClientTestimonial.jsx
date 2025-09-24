import Slider from "react-slick" // css imports in App.jsx
import { useState, useRef } from 'react'
import CarouselButtonLeft from "./CarouselButtonLeft.jsx";
import CarouselButtonRight from "./CarouselButtonRight";

function ClientTestimonial({ testimonials }) {
  const [sliderPosition, setSliderPosition] = useState(0)
  const sliderRef = useRef(null)

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-14 pb-[88px] bg-gradient-to-b from-[rgba(147,147,147,0.024)] to-[rgba(255,255,255,0.024)]">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <svg
            className="absolute bottom-[83px] left-[114px] rotate-[65deg] w-[166px] h-[166px] text-[rgba(89,105,255,0.05)]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 120 120"
            enableBackground="new 0 0 120 120"
            xmlSpace="preserve"
          >
            <polygon points="0.233,106.52 60,3 119.768,106.52 " />
          </svg>
          <svg
            className="absolute bottom-[63px] left-[80px] rotate-[57deg] w-[166px] h-[166px] text-[rgba(89,105,255,0.05)]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 120 120"
            enableBackground="new 0 0 120 120"
            xmlSpace="preserve"
          >
            <polygon points="0.233,106.52 60,3 119.768,106.52 " />
          </svg>
          <svg
            className="absolute bottom-[40%] lg:bottom-[45%] right-[40%] rotate-[63deg] w-[60px] h-[60px] text-[rgba(0,1,101,0.05)]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 120 120"
            enableBackground="new 0 0 120 120"
            xmlSpace="preserve"
          >
            <polygon points="0.233,106.52 60,3 119.768,106.52 " />
          </svg>
          <svg
            className="absolute bottom-[35%] right-[18%] rotate-[53deg] w-[60px] h-[60px] text-[rgba(0,1,101,0.05)]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 120 120"
            enableBackground="new 0 0 120 120"
            xmlSpace="preserve"
          >
            <polygon points="0.233,106.52 60,3 119.768,106.52 " />
          </svg>
          <svg
            className="absolute bottom-[35%] right-[16.5%] rotate-[33deg] w-[60px] h-[60px] text-[rgba(0,1,101,0.05)]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 120 120"
            enableBackground="new 0 0 120 120"
            xmlSpace="preserve"
          >
            <polygon points="0.233,106.52 60,3 119.768,106.52 " />
          </svg>
          <svg
            className="absolute top-[25%] right-[26%] rotate-[53deg] w-[60px] h-[60px] text-[rgba(0,1,101,0.05)]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 120 120"
            enableBackground="new 0 0 120 120"
            xmlSpace="preserve"
          >
            <polygon points="0.233,106.52 60,3 119.768,106.52 " />
          </svg>
          <svg
            className="absolute top-[24.6%] right-[24.4%] rotate-[40deg] w-[60px] h-[60px] text-[rgba(0,1,101,0.05)]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 120 120"
            enableBackground="new 0 0 120 120"
            xmlSpace="preserve"
          >
            <polygon points="0.233,106.52 60,3 119.768,106.52 " />
          </svg>
        </div>
      </div>
      <div className="w-full relative flex flex-col items-center justify-center px-4 md:px-14">
        <div className="absolute inset-0 z-10 flex justify-between items-center pointer-events-none px-2 lg:px-4">
          <CarouselButtonLeft
            action={() => {
              if (sliderRef.current) sliderRef.current.slickPrev();
            }}
          />
          <CarouselButtonRight
            action={() => {
              if (sliderRef.current) sliderRef.current.slickNext();
            }}
          />
        </div>
        <Slider
          ref={sliderRef}
          style={{ width: "100%" }}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={6000}
          pauseOnHover={true}
          afterChange={(index) => {
            setSliderPosition(index);
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={crypto.randomUUID()}>
              <div className="flex flex-col md:flex-row mx-auto max-w-[1010px] md:gap-[76px] items-center">
                <div className="relative w-[260px] h-[260px] min-h-[260px] min-w-[260px] md:w-[220px] md:h-[220px] md:min-h-[220px] md:min-w-[220px] lg:w-[260px] lg:h-[260px] lg:min-h-[260px] lg:min-w-[260px] rounded-full overflow-x-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="absolute inset-0 rounded-full border border-[rgba(0,1,105,0.56)]"></div>
                </div>
                <div className="flex flex-col">
                  <svg
                    className="ml-[20px] w-[54px] h-[48px] md:w-[65px] md:h-[58px] lg:w-[70px] lg:h-[62px] text-[rgba(0,1,114,0.85)] scale-x-90 mb-[12px] md:ml-[-6px]"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:serif="http://www.serif.com/"
                    fill="currentColor"
                    viewBox="6 19 52 26"
                    version="1.1"
                    xmlSpace="preserve"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2,
                    }}
                  >
                    <g id="Icons1" serif:id="Icons">
                      <path
                        id="quote-1"
                        d="M27.194,12l0,8.025c-2.537,0.14 -4.458,0.603 -5.761,1.39c-1.304,0.787 -2.22,2.063 -2.749,3.829c-0.528,1.766 -0.793,4.292 -0.793,7.579l9.303,0l0,19.145l-19.081,0l0,-18.201c0,-7.518 1.612,-13.025 4.836,-16.522c3.225,-3.497 7.973,-5.245 14.245,-5.245Zm28.806,0l0,8.025c-2.537,0.14 -4.457,0.586 -5.761,1.338c-1.304,0.751 -2.247,2.028 -2.828,3.829c-0.581,1.8 -0.872,4.344 -0.872,7.631l9.461,0l0,19.145l-19.186,0l0,-18.201c0,-7.518 1.603,-13.025 4.809,-16.522c3.207,-3.497 7.999,-5.245 14.377,-5.245Z"
                        style={{ fillRule: "nonzero" }}
                      />
                    </g>
                  </svg>
                  <p className="font-light leading-[35px] text-[26px] md:text-[24px] lg:text-[26px] text-[#4B5563] mb-[10px]">
                    {testimonial.comment}
                  </p>
                  <p className="text-brim-blue text-[28px] md:text-[26px] lg:text-[28px]">
                    {testimonial.author}
                  </p>
                  <p className="font-light leading-[30px] text-[16px] md:text-[15.5px] lg:text-[16px] text-[rgba(0,1,101,0.78)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative flex w-full items-center flex-nowrap justify-center gap-[11px] mt-8 py-2">
        {testimonials.map((testimonial, i) =>
          i === sliderPosition ? (
            <div className="w-[10px] h-[10px] rounded-full border-[1.5px] border-[rgba(1,3,121,0.63)]"></div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-[rgba(0,2,150,0.27)]"></div>
          )
        )}
      </div>
    </div>
  );
}

export default ClientTestimonial;
