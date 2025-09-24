import { HashLink } from 'react-router-hash-link'
import { homeCallToAction } from '../../assets/simulateCMS'

function CallToAction() {
  return <div className='relative bg-gray-900 overflow-hidden'>
    <div className='absolute inset-0 bg-dark-blue z-[1]'></div>
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.05),transparent_70%)]'></div>
    <div className='absolute top-[-5px] w-full h-[10px] bg-white/20 shadow-[0_0_15px_rgba(255,_255,_255,_0.4)] backdrop-blur-sm'></div>
    <div className='grid lg:grid-cols-3 items-center max-w-[1600px] px-4 lg:px-14 py-14 mx-auto gap-6 relative z-[2]'>
      <div className='shadow rounded-lg lg:col-span-2'>
        <h3 className='text-gray-100 text-3xl md:text-4xl lg:text-[42px] mb-6 font-oswald tracking-[2px] text-center lg:text-left'>
          { homeCallToAction.heading }</h3>
        <p className='text-gray-100 text-lg lg:max-w-3xl mb-4 text-center lg:text-left'>
          { homeCallToAction.p1 }
        </p>
        <p className="text-gray-100 text-lg lg:max-w-3xl text-center lg:text-left">
          { homeCallToAction.p2 }
        </p>
      </div>
      <div className="flex justify-center space-x-6 ml-15">
        <HashLink to='/contact#page-top' className='whitespace-nowrap bg-white/10 px-5 flex items-center py-3 rounded-xl text-gray-100 text-lg hover:bg-white/20'>
          { homeCallToAction.btn1Text }</HashLink>
        <HashLink to='/projects#projects-page' className='whitespace-nowrap bg-edge-green/20 px-5 flex items-center py-3 rounded-xl text-gray-100 text-lg hover:bg-edge-green/30'>
          { homeCallToAction.btn2Text }</HashLink>
      </div>
    </div>
    <div className="px-[56px] absolute bottom-0 h-[1px] w-full z-[2]">
      <div className="bg-gradient-to-r from-gray-500/20 via-gray-500 to-gray-500/20 w-full h-full"></div>
    </div>
  </div>
}

export default CallToAction
