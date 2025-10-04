import { Button, Card, Typography } from 'antd'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import Subscribe from '../../../components/Subscribe';
import BlogSection from '../../../components/BlogSection';





export default function index() {

    const { Title, Paragraph } = Typography


    const expertiseData = [
        {
            iconClass: 'fa-solid fa-child',
            title: 'Child Nutrition ',
            description: 'It is a long established fact that a reader will distracted the readable content',
        },
        {
            iconClass: 'fa-solid fa-user',
            title: 'Personal Coaching',
            description: 'It is a long established fact that a reader will distracted the readable content',
        },
        {
            iconClass: 'fa-solid fa-dumbbell',
            title: 'Sports Nutritionist',
            description: 'It is a long established fact that a reader will distracted the readable content',
        },
        {
            iconClass: 'fa-solid fa-running',
            title: 'Fitness Performance',
            description: 'It is a long established fact that a reader will distracted the readable content',
        },
    ];

    const experts = [
        {
            name: 'Danial Frankie',
            role: 'DIET & NUTRITION',
            image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752567430/1-1_egnhkp.png',
        },
        {
            name: 'Alena Joh',
            role: 'NUTRITION',
            image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752567417/2-2_ptwh4z.png',
        },
        {
            name: 'Michal Smart',
            role: 'GENERAL NUTRITION',
            image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752567410/3-3_gfofsl.png',
        },
        {
            name: 'Michal Smart',
            role: 'NUTRITION',
            image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752567402/4-2_c6uhtt.png',
        },
    ];

    const article = [
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

    const projects = [
        {
            image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1751878118/1-8_h53eil.jpg',
            alt: 'Woman preparing salad',
        },
        {
            image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1751525275/about-img_dccept.jpg',
            alt: 'Woman doing workout',
        },
        {
            image: 'https://res.cloudinary.com/dl6mko7z1/image/upload/v1752578660/1-8_izpryp.jpg',
            alt: 'Couple cooking together',
        },
    ];
    return (
        <div className='w-full '>
            <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
                <Title level={3} className='text-3xl md:!text-5xl font-lg text-white '>About us</Title>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
                    <div className=''><i class="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>About us</span></div>
                </div>
            </div>
            <div className=' py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <img src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1752054507/2-3-600x805_gcmpby.jpg" alt="About" className='rounded-lg w-[750px] h-[750px] bg-cover object-cover  bg-center bg-no-repeat' />
                <div className=' space-y-6'>
                    <Title level={1} className='!text-5xl'>Improving By The Inspiring Healthy Living</Title>
                    <Paragraph className='text-gray-600 !text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, alias perspiciatis. Quas quisquam adipisci veritatis esse.</Paragraph>
                    <div className='flex items-center flex-wrap text-3xl gap-x-10 gap-y-6 mt-4'>
                        <div className='flex items-center gap-3  font-semibold'>
                            <i className="fa-solid fa-bowl-rice text-green-500"></i>
                            <div className='text-black '>Motivation Program suffered alter</div>
                        </div>
                        <div className='flex items-center gap-3  font-semibold'>
                            <i class="fa-solid fa-bowl-food text-green-500"></i>
                            <div className='text-black '>Motivation comb repetition</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-6 gap-y-3 sm-gap-y-6 mt-4 text-xl font-semibold'>
                        <div className='flex items-center gap-3'>
                            <ArrowRight className='w-5 h-5 bg-green-500 text-white rounded-full' />
                            Balance Body & Mind
                        </div>
                        <div className='flex items-center gap-3'>
                            <ArrowRight className='w-5 h-5 bg-green-500 text-white rounded-full' />
                            Child Nutrition
                        </div>
                        <div className='flex items-center gap-3'>
                            <ArrowRight className='w-5 h-5 bg-green-500 text-white rounded-full' />
                            Personal Coaching
                        </div>
                        <div className='flex items-center gap-3'>
                            <ArrowRight className='w-5 h-5 bg-green-500 text-white rounded-full' />
                            Personalized Nutrition
                        </div>
                        <div className='flex items-center gap-3'>
                            <ArrowRight className='w-5 h-5 bg-green-500 text-white rounded-full' />
                            Sports Nutritionist
                        </div>
                        <div className='flex items-center gap-3'>
                            <ArrowRight className='w-5 h-5 bg-green-500 text-white rounded-full' />
                            Support & Motivation
                        </div>
                    </div>
                    <div className='mt-6 space-y-6'>
                        <div className='text-gray-500 flex items-center gap-2 text-lg'><i className="fa-solid fa-check text-green-500"></i>There are many variations of passages of Lorem Ipsum available</div>
                        <div className='text-gray-500 flex items-center gap-2 text-lg'><i className="fa-solid fa-check text-green-500"></i>There are many variations of passages of Lorem Ipsum available</div>
                        <div className='text-gray-500 flex items-center gap-2 text-lg'><i className="fa-solid fa-check text-green-500"></i>There are many variations of passages of Lorem Ipsum available</div>
                    </div>
                    <button className='relative overflow-hidden px-6 py-3 bg-green-500 text-white border border-green-500 rounded-full group '>
                        <span className='relative z-10 text-lg'>Read More</span>
                        <span className='absolute left-0 top-0 w-0 h-full bg-green-900 transition-all duration-300  group-hover:w-full z-0'></span>
                    </button>

                </div>
            </div>

            <div className="w-full bg-white relative">
                <div className=" grid grid-cols-1 lg:grid-cols-3 ">
                    <div className=" col-span-1 flex flex-col justify-center px-6 py-16 bg-white">
                        <div>
                            <p className="text-green-600 text-lg sm:text-lg md:text-xl lg:text-xl tracking-widest uppercase font-bold mb-2">| Explore Our Projects</p>
                            <Title level={2} className="font-bold !mb-4 !text-2xl sm:!text-2xl md:!text-3xl lg:!text-5xl ">Our Feature Projects</Title>
                            <p className="text-md text-gray-700 font-medium mb-6">
                                There are many variations of passages of Lorem available, but the majority have suffered
                            </p>
                            <button className="relative overflow-hidden px-6 py-3 bg-green-500 group text-white rounded inline-block w-fit">
                                <span className="relative z-10 flex items-center text-xl">
                                    <i className="fa fa-leaf mr-2"></i>
                                    Read More
                                </span>
                                <span className="absolute left-0 top-0 w-0 h-full bg-black transition-all duration-300 group-hover:w-full z-0"></span>
                            </button>
                        </div>
                    </div>

                    <div className=" col-span-2 bg-green-500 py-12 px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {projects.slice(0, 3).map((project, index) => (
                                <img
                                    key={index}
                                    src={project.image}
                                    alt={`Project ${index}`}
                                    className="w-full h-[450px] object-cover rounded-lg shadow-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-25'>
                <div className='py-16 px-4 text-center bg-white'>
                    <p className='text-green-500 uppercase  tracking-wide text-xl font-semibold'>| Why Choose Us</p>
                    <Title level={2} className='mt-2 !text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Our Main Areas Of Expertise</Title>
                </div>
                <div className='px-6 md:px-8 lg:px-16 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-15 '>
                        {expertiseData.map((item, index) => {
                            return (
                                <Card bordered={false} className='!shadow-md hover:!shadow-xl duration-300 transition h-[300px] w-[350px]  !bg-gray-100 '>
                                    <div className='flex flex-col  h-full items-start text-left space-y-1 '>
                                        <div className=' !text-green-400  '>
                                            <i className={`${item.iconClass}  text-5xl`}></i>
                                        </div>
                                        <Title level={5} className='!text-2xl font-semibold mt-3'>{item.title}</Title>
                                        <Paragraph className='!text-lg !text-gray-500 mt-0 '>{item.description}</Paragraph>
                                        <a href="#" className="!text-green-500 hover:!underline text-xl font-semibold">READ MORE</a>
                                    </div>

                                </Card>
                            )
                        })}
                    </div>
                </div>

            </div>
            {/* <div >
                <div className='py-16 px-4 text-center !bg-white'>
                    <p className='text-green-500 uppercase  tracking-wide font-semibold'>| OUR EXPERTS</p>
                    <Title level={2} className='mt-2 font-bold'>Diet & Nutrition Experts</Title>
                </div>
                <div className='px-4 sm:px-8 lg:px-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-2 '>
                        {experts.map((expert, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center'>
                                    <div>
                                        <img src={expert.image} alt={expert.name} className='w-40 h-40 rounded-full object-cover border-white shadow-md' />
                                    </div>
                                    <Title level={3} className='font-semibold mt-1'>{expert.name}</Title>
                                    <p className='text-green-400 text-sm uppercase mt-0'>{expert.role}</p>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div> */}
            <Subscribe />

            <BlogSection />



        </div>
    )
}
