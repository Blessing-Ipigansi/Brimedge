import { HashLink } from 'react-router-hash-link'

function Project({ content }) {
  const { tag, img, title, client, location, dateCompleted, description, shortDescription, projectIdLink } = content

  return <div className='animate-fade-in hover-scale'>
    <div className='text-card-foreground group overflow-hidden h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl'>
      <div className='relative h-72 overflow-hidden rounded-t-2xl'>
        <img loading='lazy' alt="" src={img} className='h-full w-full object-cover transition-all duration-700 group-hover:scale-110' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        <div className='absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300'>
          {(tag) && <span className='bg-gradient-to-r from-brim-blue to-accent-blue text-white px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-lg backdrop-blur-sm'>
            { tag }</span>}
        </div>
        <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300'>
          <div className='w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
        </div>
      </div>
      <div className='p-6 relative'>
        <div className='absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-brim-blue to-edge-green transform -translate-y-1 rounded-full'></div>
        <div className='pt-4'>
          <h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-brim-blue transition-colors duration-300'>
            { title }</h3>
          <p className='text-sm text-brim-blue font-medium mb-4 bg-blue-50 px-3 py-1 rounded-full inline-block'>
            { `Client: ${client}` }</p>
          <div className='space-y-2 mb-4'>
            <div className='flex items-center text-sm text-gray-600'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4 mr-2 text-brim-blue"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>{ location }</span>
            </div>
            <div className='flex items-center text-sm text-gray-600'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4 mr-2 text-brim-blue"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              <span>{ dateCompleted }</span>
            </div>
          </div>
        </div>
        <p className='text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed'>
          { (shortDescription)? shortDescription: description }</p>
        <HashLink to={`${projectIdLink}#page-top`} className='inline-flex items-center text-brim-blue font-semibold text-sm hover:text-edge-green transition-all duration-300 group/link'>
          <span className='mr-2'>View Project Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </HashLink>
      </div>
    </div>
  </div>
}

export default Project
