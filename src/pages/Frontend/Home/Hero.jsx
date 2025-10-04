import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Leaf, Phone } from "lucide-react"

const slides = [
  {
    image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1751522977/1-7_gw9wwv.jpg",
    intro: "Great Experience in Nutrition",
    title: "Healthy And Tasty Food with Natural",
    subtitle: "Experience the perfect balance of health and taste with our naturally sourced ingredients.",
  },
  {
    image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1751450452/2-11_ngsht4.jpg",
    intro: "Nutrition Choices for Great Body Soul",
    title: "Balanced Nutrition for a Balanced Life",
    subtitle: "Discover personalized nutrition plans that nourish both your body and soul.",
  },
  {
    image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1751450452/1-11_hkjtxz.jpg",
    intro: "Great Experience in Nutrition",
    title: "Make Healthy Life with Natural Food",
    subtitle: "Embrace a healthier lifestyle through wholesome food choices.",
  },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000) 

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <section
      key={current}
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center transition-all duration-1000 relative overflow-hidden"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="w-auto px-12 flex flex-col justify-center h-full">
          <div
            className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-white"
            data-aos="fade-left"
            key={current + "-content"}
          >
            <p className="text-black font-bold text-xl sm:text-sm md:text-xl lg:text-lg uppercase tracking-wide border-l-4 border-green-600 pl-2">
              {slide.intro}
            </p>
            <h1 className="text-2xl sm:text-3xl md:!text-5xl lg:!text-6xl font-bold leading-tight">{slide.title}</h1>
            <p className="text-gray-100 text-sm sm:text-base md:text-xl lg:text-xl font-bold leading-relaxed">{slide.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-green-700 transition text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer">
                <Leaf className="w-4 h-4" />
                Read More
              </button>
              <button className="border bg-white text-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-green-600 hover:text-white transition text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer">
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

