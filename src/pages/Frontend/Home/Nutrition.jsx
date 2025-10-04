import React from 'react';

const Nutrition = () => {
  return (
    <div className='w-full overflow-x-hidden '>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-0'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-0'>

          <div className=''>
            <img src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1751629405/2-8_vwmud3.jpg" alt="Couple Cooking" className='w-full h-full object-cover' />
          </div>

          <div className='grid grid-cols-1'>
            <div className='bg-gray-200 flex-1 p-6 shadow flex flex-col justify-center items-center text-center'>
              <h2 className="text-green-600 text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-3"><i className="fa-solid fa-clipboard"></i></h2>
              <p className='text-green-600 font-semibold text-3xl sm:text-lg md:text-sm lg:text-2xl xl:text-2xl'>Nutrition</p>
              <h3 className='font-semibold text-2xl sm:text-md lg:text-xl my-2 '>Weight Loss Program</h3>
              <p className='text-lg text-gray-700 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='bg-green-600 flex-1 p-6 shadow flex flex-col justify-center items-center text-center'>
              <h2 className="text-white text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl  mb-3 "><i className="fa-brands fa-apple"></i></h2>
              <p className='text-white font-semibold text-3xl sm:text-lg md:text-sm lg:text-2xl xl:text-2xl'>Nutrition</p>
              <h3 className='text-white font-semibold text-2xl sm:text-md lg:text-xl my-2'>Fitness Performance</h3>
              <p className='text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-0'>
          <div className=''>
            <img src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1751878118/1-8_h53eil.jpg" alt="Couple Cooking" className='w-full h-full object-cover' />
          </div>
          <div className='grid grid-cols-1'>
            <div className='bg-gray-200 flex-1 p-6 shadow flex flex-col justify-center items-center text-center'>
              <h2 className="text-green-600 text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-3"><i className="fa-solid fa-clipboard"></i></h2>
              <p className='text-green-600 font-semibold text-3xl sm:text-lg md:text-sm lg:text-2xl xl:text-2xl'>Nutrition</p>
              <h3 className='font-semibold text-2xl sm:text-md lg:text-xl my-2 '>Weight Loss Program</h3>
              <p className='text-lg text-gray-700 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='bg-green-600 flex-1 p-6 shadow flex flex-col justify-center items-center text-center'>
              <h2 className="text-white text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl  mb-3 "><i className="fa-brands fa-apple"></i></h2>
              <p className='text-white font-semibold text-3xl sm:text-lg md:text-sm lg:text-2xl xl:text-2xl'>Nutrition</p>
              <h3 className='text-white font-semibold text-2xl sm:text-md lg:text-xl my-2'>Fitness Performance</h3>
              <p className='text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
