import CountUp from "react-countup"
import { ArrowRight, Plus, Play } from "lucide-react"

const MiddleSection = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-12 ">
        <div className="flex-1 w-full" data-aos="fade-down">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-green-500"></div>
            <p className="text-green-500 text-xl sm:text-lg md:text-lg lg:text-lg font-semibold uppercase">About nutritius</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Improving By Inspire Healthy Living
          </h2>
          <p className="text-md sm:text-lg md:text-lg lg:text-xl  text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words.
          </p>
          <h4 className="text-lg sm:text-md lg:text-3xl md:text-2xl font-semibold mb-3 sm:mb-4">Nutrition Special Offers</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-3 sm:gap-y-4 text-xl sm:text-lg text-gray-700 font-bold mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 rounded-full p-0.5 bg-green-400  text-white" />
              Balance Body & Mind
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 rounded-full p-0.5 bg-green-400 text-white" />
              Personal Coaching
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 rounded-full p-0.5 bg-green-400 text-white" />
              Personalized Nutrition
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 rounded-full p-0.5 bg-green-400 text-white" />
              Sports Nutritionist
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 rounded-full p-0.5 bg-green-400 text-white" />
              Child Nutrition
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 rounded-full p-0.5 bg-green-400 text-white" />
              Support & Motivation
            </div>
          </div>
          <button className="border bg-white text-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-600 hover:text-white transition text-lg sm:text-xl flex items-center justify-center gap-2 cursor-pointer">
            
            Read More
          </button>
        </div>

        <div className="flex-1 w-full order-first lg:order-none" data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1751525275/about-img_dccept.jpg"
            alt="Healthy Eating"
            className="shadow-md rounded-xl w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        <div>

          <div className="flex-1 w-full mt-6 sm:mt-8 lg:mt-0 grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-10 lg:gap-x-8 lg:gap-y-10 justify-items-start" data-aos="fade-down">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-1">
                <CountUp start={0} end={567} duration={5} />
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </h2>
              <p className="text-green-700 text-xs sm:text-sm font-semibold mt-2 uppercase">Years Experience</p>
              <div className="h-0.5 bg-green-500 mt-2 w-16 sm:w-20 md:w-24"></div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-1">
                <CountUp start={0} end={687} duration={5} />
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 font-bold" />
              </h2>
              <p className="text-green-700 text-xs sm:text-sm font-semibold mt-2 uppercase">Project Done</p>
              <div className="h-0.5 bg-green-500 mt-2 w-16 sm:w-20 md:w-24"></div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-1">
                <CountUp start={0} end={493} duration={5} />
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </h2>
              <p className="text-green-700 text-xs sm:text-sm font-semibold mt-2 uppercase">Happy Customers</p>
              <div className="h-0.5 bg-green-500 mt-2 w-16 sm:w-20 md:w-24"></div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-1">
                <CountUp start={0} end={791} duration={5} />
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </h2>
              <p className="text-green-700 text-xs sm:text-sm font-semibold mt-2 uppercase">Award Win</p>
              <div className="h-0.5 bg-green-500 mt-2 w-16 sm:w-20 md:w-24"></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default MiddleSection


