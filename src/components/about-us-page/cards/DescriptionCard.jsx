

function DescriptionCard({ title, description, img }) {
  // const emojiOnlyRegex = /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)+$/u;

  return <div className="border-[16px] border-brim-blue/90 pt-10 pb-14 px-4 md:px-8 bg-white rounded-[8px] shadow-[6px_3px_14px_4px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center">
    <div className="mb-4 lg:mb-7 rounded-full w-[120px] h-[120px] lg:w-[146px] lg:h-[146px] bg-[rgba(3,4,94,0.15)] flex items-center justify-center">
      <img loading='lazy' src={img} className="w-[68px] h-[68px] lg:h-[76px] lg:w-[76px]"/>
    </div>
    <span className="mb-4 lg:mb-4 block text-[24px] leading-[30px] lg:leading-[34px] font-semibold text-center text-gray-800">
        {title}</span>
    <p className="text-center text-[15px] lg:text-[16px] leading-[32px] lg:leading-[34px] text-gray-600">
      {description}</p>
  </div>
}

export default DescriptionCard
