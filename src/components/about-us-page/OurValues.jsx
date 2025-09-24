import { aboutOurValues } from "../../assets/simulateCMS" // Replace with redux


function OurValues() {
  return (
    <div className="">
      <div className="max-w-[1600px] px-4 md:px-10 py-16 mx-auto">
        <div className="grid xl:grid-cols-[1.1fr_3fr] xl:space-y-0 space-y-10">
          <div>
            <span className="text-white-bg-green font-semibold py-[2px] text-[17px] tracking-widest rounded-full whitespace-nowrap">
              {`- / ${aboutOurValues.topPhrase}`}
            </span>
            <h3 className="text-brim-blue text-4xl font-oswald mt-1 font-bold relative">
              <span className="absolute">{aboutOurValues.heading}</span>
              <span
                className="[-webkit-text-stroke:1.5px_white]"
                style={{ textShadow: "-2px 1.5px 0 lightgray" }}
              >
                {aboutOurValues.heading}
              </span>
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-4">
            {aboutOurValues.values.map((valueObj, i) => (
              <div
                key={crypto.randomUUID()}
                className="space-y-4 border-l-[1px] border-gray-400 pl-2"
              >
                <div className="font-bold text-gray-300 text-3xl">0{i + 1}</div>
                <div className="font-semibold text-xl text-gray-900">
                  {valueObj.title}
                </div>
                <p className="font-thin text-gray-700">
                  <span className="font-semibold">{valueObj.lead}</span>{" "}
                  {valueObj.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues
