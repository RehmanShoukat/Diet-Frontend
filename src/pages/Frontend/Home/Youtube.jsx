import React from 'react'

const Youtube = () => {
  return (
     <div className='relative w-full min-h-[60vh] bg-[url("https://res.cloudinary.com/dl6mko7z1/image/upload/v1751642655/3d-grunge-room-interior-with-spotlight-smoky-atmosphere-background_ciweue.jpg")] bg-cover bg-center bg-no-repeat text-center mt-0 flex flex-col items-center justify-center px-4 py-12 md:py-16'>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-red-500 to-red-600 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full shadow-2xl group cursor-pointer mb-8 mx-auto transform hover:scale-110 transition-all duration-300 border-4 border-white/20">
          <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full rounded-full transition-all duration-500 ease-out"></span>
          <span className="relative z-10 text-white group-hover:text-white transition-colors duration-200">
            <i className="fa-brands fa-youtube text-white text-3xl md:text-4xl drop-shadow-lg"></i>
          </span>
        </div>

        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-2xl">
          Trusted By More Than
          <span className="block text-green-400 mt-2">650,000 Happy People</span>
        </h2>

        <p className="text-white/90 text-base md:text-lg lg:text-xl font-medium py-4 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>

        <button className="relative bg-gradient-to-r from-white to-gray-100 text-green-600 px-8 py-4 md:px-10 md:py-5 rounded-full overflow-hidden group shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg border-2 border-white/30 cursor-pointer">
          <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-full rounded-full transition-all duration-500 ease-out"></span>
          <span className="relative z-10 text-green-600 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i>
            Book Appointment
          </span>
        </button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-green-400">650K+</div>
            <div className="text-sm md:text-base opacity-90">Happy Customers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-green-400">99%</div>
            <div className="text-sm md:text-base opacity-90">Satisfaction Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-green-400">500K+</div>
            <div className="text-sm md:text-base opacity-90">Appointments Booked</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-green-400">24/7</div>
            <div className="text-sm md:text-base opacity-90">Support Available</div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-400/10 rounded-full blur-2xl"></div>
    </div>
  )
}

export default Youtube