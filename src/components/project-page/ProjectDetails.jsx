

function ProjectDetails({ title, location, paragraphs, description, client, size, completionDate, keyFeatures, awards }) {
  return <div className='grid lg:grid-cols-[2.05fr_1fr] px-4 lg:px-0 sm:ml-8 mt-9'>
    <div className="flex flex-col mb-[26px] lg:mb-9 lg:col-span-2">
      <h1 className='text-[24px] leading-[32px] lg:text-[32px] lg:leading-[43px] xl:text-[38px] xl:leading-[44px] mb-[5px] lg:mb-[18px] max-w-[620px] xl:font-semibold text-gray-800'>
        {title}</h1>
      <p className='text-[19px] xl:text-[22px] text-gray-600'>{location}</p>
    </div>
    <div className='space-y-7 xl:text-[18px] lg:max-w-[570px] lg:pr-6'>
      {(paragraphs && paragraphs.length > 0) && paragraphs.map((p) => 
      <p key={crypto.randomUUID()} className="leading-[29px]">{p}</p>
      )}
      {(!paragraphs || paragraphs.length === 0) &&
      <p className="leading-[29px]">{description}</p>
      }
    </div>
    <div className="text-[15px] xl:text-[19px] text-gray-600 space-y-[7px] lg:space-y-[12px] leading-[29px] mt-[58px] lg:mt-0">
      {(client) && <p><span className="font-bold text-black">Client: </span>{client}</p>}
      {(size) && <p><span className="font-bold text-black">Size: </span>{size}</p>}
      {(completionDate) && <p><span className="font-bold text-black">Completion Date: </span>{completionDate}</p>}
      {(keyFeatures) && <p><span className="font-bold text-black">Expertise: </span>{keyFeatures.map((expertise, i) => {
        return (i !== keyFeatures.length - 1)? 
        <span key={crypto.randomUUID()} >{ `${expertise}, ` }</span>:
        <span key={crypto.randomUUID()} >{ `and ${expertise}.` }</span>
      })}</p>}
      {(awards && awards.length > 0) && <div className="pt-5 lg:pt-8">
        <p className="space-y-[7px] lg:space-y-[18px]"><span className="font-bold text-black block">Awards: </span>
          {awards.map((award) => 
            <span key={crypto.randomUUID()} className="block">{award}</span>
          )}
        </p>
      </div>}
    </div>
  </div>
}

export default ProjectDetails
