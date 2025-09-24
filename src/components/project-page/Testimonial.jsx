

function Testimonial({ testimonial }) {
  return <section className="py-14 mt-5">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex text-center items-center justify-center flex-col">
        <blockquote className="mb-4 max-w-[1000px] text-[20px] leading-[36px] xl:text-[24px] xl:leading-[38px] relative before:content-['“'] before:absolute before:text-[140px] before:text-brim-blue/35 before:font-oswald before:top-7 before:left-0 after:content-['”'] after:absolute after:text-[140px] after:text-brim-blue/35 after:font-oswald after:bottom-[-24px] after:right-0">
          { testimonial.comment }</blockquote>
        <p className="mb-[2px] text-[18px] xl:text-[20px] font-semibold text-brim-blue">
          { testimonial.name }</p>
        <p className="text-gray-700 text-[15px] xl:text-[16px]">
          { testimonial.role }</p>
      </div>
    </div>
  </section>
}

export default Testimonial
