import { useState, useEffect, useRef, useContext } from 'react'
import HomeContext from "../../context/HomeContext.jsx"
import ClientTestimonial from "./sub-components/ClientTestimonial.jsx"

function ClientTestimonials() {
  const { getFields } = useContext(HomeContext);
  const [content, setContent] = useState({ isLoading: true });
  const {
    homeTestimonialsHeading,
    homeTestimonialsClientLogos,
    homeTestimonialsTestimonials,
  } = content;
  const [inView, setInView] = useState(false);
  const mainRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );
    const triggerElement = mainRef.current
    if (triggerElement) observer.observe(triggerElement);

    getFields(
      "homeTestimonialsHeading",
      "homeTestimonialsClientLogos",
      "homeTestimonialsTestimonials"
    ).then((data) => {
      setContent(data);
    });

    return () => {
      if (triggerElement) observer.unobserve(triggerElement);
      observer.disconnect();
    };
  }, []);

  if (content.isError) {
    const errorMessage =
      "There was a problem fetching the content for the home page";
    const errorName = "Failed to Fetch";
    const fetchError = new Error(errorMessage);
    fetchError.name = errorName;
    throw fetchError;
  } else // Throw error if data fetching from contentful is unsuccessful
  return (
    <section className="py-0 relative overflow-hidden min-h-[100vh]">
      <div className="flex flex-col items-center">
        <h3
          ref={mainRef}
          className={`relative text-5xl md:text-6xl text-brim-blue mb-11 mt-14 font-oswald font-bold px-4 md:px-9 lg:px-10 ${
            inView && !content.isLoading ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <span className="absolute">{homeTestimonialsHeading}</span>
          <span
            className="[-webkit-text-stroke:2px_#fff]"
            style={{ textShadow: "-2.5px 2px 0 rgba(0, 0, 0, 0.25)" }}
          >
            {homeTestimonialsHeading}
          </span>
        </h3>
        <div className="flex w-full gap-x-20 gap-y-12 flex-wrap justify-center pt-6 pb-[90px] px-4 md:px-9 lg:px-10 xl:px-14">
          {inView &&
            homeTestimonialsClientLogos &&
            homeTestimonialsClientLogos.map((logo) => (
              <img key={crypto.randomUUID()} className="h-[80px]" src={logo} alt="" />
            ))}
        </div>
        {homeTestimonialsTestimonials && (
          <ClientTestimonial testimonials={homeTestimonialsTestimonials} />
        )}
      </div>
    </section>
  );
}

export default ClientTestimonials
