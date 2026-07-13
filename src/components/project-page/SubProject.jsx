import { useNavigate } from 'react-router-dom'

function SubProject({ link, img, tag, title, description }) {
  const navigate = useNavigate()

  return <div className='group cursor-pointer' onClick={() => { navigate(link) }}>
    <div className="w-[100%] h-[1px] lg:bg-gradient-to-r lg:from-gray-200 lg:via-slate-300 lg:to-slate-200 relative">
      <div className='absolute lg:hidden inset-0 mx-[-32px] bg-gradient-to-r from-gray-200 via-slate-300 to-slate-200'></div>
    </div>
    <div className="mt-4 mb-4 lg:mb-6 flex gap-6 items-start">
      <img loading='lazy' src={img} className="w-[103px] h-[103px] min-w-[103px] min-h-[103px] xl:w-[115px] xl:h-[115px] xl:min-w-[115px] xl:min-h-[115px] object-cover rounded-[4px] group-hover:border-[1px] border-black" />
      <div className="grid group-hover:text-white-bg-green transition-colors">
        <div className="flex">
        <p className="line-clamp-1 text-brim-blue/70 uppercase leading-[16px] xl:leading-[19px] text-[15px] xl:text-[16px] group-hover:text-white-bg-green transition-colors">
          {tag}</p></div>
        <p className="line-clamp-1 font-semibold text-[15px] xl:text-[16px]">{title}</p>
        {
        (description) && <p className="line-clamp-3 font-thin text-[15px] xl:text-[16px]">{description}</p>
        }
      </div>
    </div>
  </div>
}

export default SubProject
