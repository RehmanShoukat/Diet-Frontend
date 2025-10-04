import React from 'react';
import { Card } from 'antd';

const testimonials = [
  {
    name: 'David Matthews',
    role: 'NUTRITION',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Danial Frankie',
    role: 'NUTRITION',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Micheal Baker',
    role: 'NUTRITION',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-center">
      <div className="mb-18">
        <div className="flex justify-center items-center gap-3 mb-2">
          <div className="w-1 h-4 bg-green-500"></div>
          <p className="text-green-500 uppercase font-semibold text-xl tracking-widest">Testimonials</p>
        </div>
        <h2 className="text-3xl md:!text-4xl font-bold text-gray-800">What Our Customer Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <Card
            key={index}
            bordered={false}
            className="relative pt-12 shadow-md hover:shadow-lg transition duration-300 rounded-lg bg-white"
            bodyStyle={{ paddingTop: 48, paddingBottom: 32, paddingInline: 24 }}
          >
            <div className="absolute left-1/2 -top-12 transform -translate-x-1/2">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-27 h-27 rounded-full border-4 border-white shadow"
                />
                <span className="absolute bottom-0 right-0 bg-green-500 text-white text-md rounded-full p-1.5">
                  <i className="fas fa-quote-right text-md"></i>
                </span>
              </div>
            </div>
            <h3 className="text-lg sm:text-md md:text-lg lg:text-2xl  font-semibold !mt-8">{item.name}</h3>
            <p className="text-green-600 text-xl font-semibold tracking-wide mt-2">
              {item.role}
            </p>
            <p className="text-gray-600 text-lg font-semibold mt-2 mb-3">{item.text}</p>
            <div className="text-yellow-400 text-md space-x-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
