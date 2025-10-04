import { Button, Card, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import Subscribe from '../../../components/Subscribe';
import BlogSection from '../../../components/BlogSection';


export default function index() {

  const Title = Typography




  const services = [
    {
      title: 'Weight Loss Program',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
      icon: 'fa-apple-whole',
      image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1751525275/about-img_dccept.jpg',
    },
    {
      title: 'Fitness Performance',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
      icon: 'fa-dumbbell',
      image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1751525275/about-img_dccept.jpg',
    },
    {
      title: 'Personal Coaching',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
      icon: 'fa-user-tie',
      image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1751629405/2-8_vwmud3.jpg',
    },
    {
      title: 'Personalized Nutrition',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
      icon: 'fa-bowl-food',
      image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752054507/2-3-600x805_gcmpby.jpg',
    },
    {
      title: 'Balance Body & Mind',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
      icon: 'fa-scale-balanced',
      image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752667967/6-1_ogaugy.jpg',
    },
    {
      title: 'Child Nutrition',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
      icon: 'fa-child',
      image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752578660/1-8_izpryp.jpg',
    }
  ];

  const plans = [
    {
      title: "Post Pregnancy",
      subtitle: "Healthy food for breakfast",
      price: "$25.00",
      icon: "fa-baby",

    },
    {
      title: "Body Sculpting",
      subtitle: "Workout for upper body",
      price: "$35.00",
      icon: "fa-dumbbell",

    },
    {
      title: "Weight Loss",
      subtitle: "Drinking water properly",
      price: "$29.00",
      icon: "fa-bottle-water",

    },
  ];

  const blogging = [
    {
      id: 1,
      date: "18 AUG",
      title: "Ways To Maintain Health Blood Sugar",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      author: "Peacefulqode",
      comments: 0,
      image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1752393400/12_asrd4j.jpg",
    },
    {
      id: 2,
      date: "18 AUG",
      title: "The Power Of Simple Lifestyle Changes",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      author: "Peacefulqode",
      comments: 0,
      image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1752392204/10_zyastz.jpg",
    },
    {
      id: 3,
      date: "18 AUG",
      title: "Being Happy Is The Best Way To Grow Your Health",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      author: "Peacefulqode",
      comments: 0,
      image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1752131399/6_doapws.jpg",
    },
  ];

  return (
    <div className='w-full'>
      <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
        <Title level={3} className='text-3xl md:!text-5xl font-semibold text-white '>Our Services</Title>
        <div className='flex items-center gap-3 mt-5'>
          <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
          <div className=''><i class="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>Services</span></div>
        </div>
      </div>

      <div className='py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 w-full'>
        <div className='text-green-500 text-xl font-semibold text-center'>| WHAT WE OFFER</div>
        <h2 className='text-4xl font-semibold text-center mt-3'>Our Diet & Nutrition Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-8'>
          {services.map((item, i) => {
            return (
              <div key={i} className='relative group p-8 md:p-12 min-h-[350px] transition-all duration-300  rounded-xl shadow-lg bg-white hover:bg-green-600 !text-black hover:text-white  overflow-hidden '>
                <div className='absolute inset-0  object-top object-cover  bg-center opacity-0 group-hover:opacity-50 transition-all duration-500' style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className='absolute bottom-0 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-300'></div>
                <div className='relative z-10'>
                  <i className={`fa-solid ${item.icon} !text-5xl text-green-500 group-hover:!text-white mb-4`}></i>
                  <div className='text-4xl  font-semibold mb-3 '>{item.title}</div>
                  <p className='text-lg mb-4 '>{item.description}</p>
                  <div className='text-green-500 text-2xl font-semibold group-hover:!text-white underline'>Read More</div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 '>
        <div className='text-center'>
          <div className='flex items-center gap-2 justify-center mb-3'>
            <div className='w-1 h-5 bg-green-400 font-semibold'></div>
            <p className='text-green-400 text-2xl font-semibold'>DIET PLANS</p>
          </div>
          <div className='font-bold text-6xl'>Choose Your Perfect Plan</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto mt-12 gap-17'>
          {plans.map((plan, i) => {
            return (
              <Card key={i} className='rounded-2xl shadow-md text-center transition-all duration-300 !bg-gray-50 hover:scale-[1.03] min-h-[440px]'>
                <div className='text-4xl font-semibold mb-3'>{plan.title}</div>
                <p className='text-lg font-semibold mb-4'>{plan.subtitle}</p>
                <div className='text-green-600 !text-5xl mb-4'>
                  <i className={`fa-solid ${plan.icon}`}></i>
                </div>
                <p className='text-4xl font-medium mb-2'>{plan.price}</p>

                <ul className='text-gray-700 mt-4 text-xl font-medium'>
                  <li>With 7 day free trial</li>
                  <li>Nutrition Strategies</li>
                  <li>Health diet plan</li>
                  <li>Motivation program</li>
                </ul>
                <button className=" mx-auto mt-5 border bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-white hover:text-green-500 transition text-xl  flex items-center justify-center gap-2 cursor-pointer">
                  Choose Plan
                </button>
              </Card>

            )
          })}
        </div>
      </div>

      <div className='w-full mb-12'>
        <div className='relative bg-center bg-cover bg-black h-[400px] ' style={{ backgroundImage: "url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1751642655/3d-grunge-room-interior-with-spotlight-smoky-atmosphere-background_ciweue.jpg')" }}>
          <div className='flex justify-center  gap-3 '>
            <div className='w-1 h-5 bg-green-400 mt-12'></div>
            <p className='text-xl font-semibold text-green-400 mt-12'>EXPLORE OUR PROJECTS</p>
          </div>
          <Title level={2} className='text-3xl md:!text-3xl font-bold !text-white text-center mt-5'>EXPLORE OUR PROJECTS</Title>
          <div className='max-w-7xl mx-auto  mt-8 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {['https://res.cloudinary.com/dl6mko7z1/image/upload/v1752054507/2-3-600x805_gcmpby.jpg',
              'https://res.cloudinary.com/dl6mko7z1/image/upload/v1751878118/1-8_h53eil.jpg',
              'https://res.cloudinary.com/dl6mko7z1/image/upload/v1751629405/2-8_vwmud3.jpg',
              'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752578660/1-8_izpryp.jpg'
            ].map((img, idx) => {
              return (
                <div key={idx} className='rounded-xl bg-white overflow-hidden shadow-md '>
                  <img src={img} alt={`Project${idx + 1}`} className='w-full h-[300px] object-cover' />

                </div>
              )

            })}
          </div>
        </div>
      </div>




      <BlogSection />
      <Subscribe />

    </div>
  )
}
