import { HashLink } from 'react-router-hash-link'

function FeaturedProject({ content }) {
  const { title, location, link, img } = content

  return (
    <div>
      <div className="shadow-[6px_3px_14px_4px_rgba(0,0,0,0.15)] border-[12px] border-brim-blue/90 bg-brim-blue/15 rounded-[6px] transition-all duration-500 hover:scale-105">
        <HashLink to={link} className="w-full relative group">
          <img
            className="w-full border-b-4 border-black/0 transition-all duration-500 group-hover:blur-md"
            src={img}
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full p-6 text-white/70 transition-all translate-x-[40px] group-hover:bg-white/15 group-hover:translate-x-0 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play opacity-0 group-hover:opacity-70 group-hover:translate-x-0 translate-x-[60px] transition-all duration-500"
              >
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
            </div>
          </div>
        </HashLink>
        <div className="px-4 py-4 flex flex-col justify-end bg-white items-center">
          <HashLink to={link}>
            <p className="mb-2 block text-[24px] leading-[30px] lg:leading-[34px] font-semibold text-center text-gray-800 transition-all duration-500 hover:text-accent-blue hover:scale-105">
              {title}
            </p>
          </HashLink>
          <p className="text-center text-[15px] lg:text-[16px] leading-[32px] lg:leading-[34px] text-gray-600">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject
