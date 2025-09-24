import { HashLink } from 'react-router-hash-link'

function CallToAction2({ page }) {
  return <div className='mt-20 text-center animate-fade-in'>
    <div className='bg-gradient-to-br from-brim-blue/95 via-brim-blue to-brim-text p-12 lg:p-16 rounded-3xl shadow-2xl'>
      <h2 className={(page==='/projects')? 'text-3xl font-bold text-white mb-4': 'text-3xl lg:text-4xl font-bold text-white mb-6'}>
        { (page==='/projects')? 'Ready to Start Your Project?': 'Interested in a Similar Project?' }
      </h2>
      <p className={(page==='/projects')? 'text-white/90 text-lg mb-8 max-w-2xl mx-auto': 'text-white/90 text-xl mb-10 max-w-3xl mx-auto leading-relaxed'}>
        { (page==='/projects')? "Let's bring your vision to life with our expertise and commitment to excellence.": "Contact us today to discuss how we can bring your vision to life with the same level of excellence and attention to detail." }
      </p>
      <HashLink to='/contact#page-top' className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-white text-brim-blue hover:bg-gray-100 font-bold px-10 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
        { (page==='/projects')? 'Start Your Project': 'Get in Touch' }
      </HashLink>
    </div>
  </div>
}

export default CallToAction2
