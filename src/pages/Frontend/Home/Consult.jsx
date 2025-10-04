import { Button, Typography } from 'antd'
import React from 'react'
import { Leaf, Phone } from "lucide-react"


const Consult = () => {
    const { Title, Paragraph } = Typography;

    return (
        <div className='w-full'>
            <div className='w-full h-[600px] bg-center  object-cover object-top relative md:block hidden' style={{backgroundImage:"url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752131399/6_doapws.jpg')"}}>
                <div className='absolute bottom-0 left-0 bg-gray-800 bg-opacity-80 p-4 md:p-6 lg:p-8 w-full sm:w-[60%] md:w-[40%] rounded-tr-md shadow-lg text-left'>
                    <Title level={2} className="!text-white !text-xl md:!text-2xl lg:!text-5xl font-semibold">
                        Get Your Free Consulting
                    </Title>
                    <Paragraph className='!text-xl sm:text-md md:text-lg lg:text-xl !text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </Paragraph>
                    <div className='!text-white space-x-2 text-xl'>
                        <span className='font-bold'>Call</span>
                        <span className='font-bold'>987654321</span>
                        <span className='font-bold'>OR</span>
                        <span className='font-bold'>TestEmail@gmail.com</span>
                    </div>
                    <button className="border bg-white text-green-500 px-6 sm:px-7 py-2 sm:py-3 rounded-full hover:bg-green-600 hover:text-white transition !text-2xl  flex items-center justify-center gap-2 cursor-pointer mt-4 font-sans">
                        <Phone className="w-6 h-6" />
                        Contact Us
                    </button>
                </div>
            </div>
            <div className='md:hidden w-full bg-gray-800 bg-opacity-90 p-6 rounded-md mt-6 mx-auto max-w-[90%] shadow-lg text-center '>
                <Title level={2} className="!text-white">Get Your Free Consulting</Title>
                <Paragraph className='text-sm !text-white'>Lorem ipsum dolor sit amet consectetur adipisicing.</Paragraph>
                <div className='!text-white space-x-1'>
                    <span className='font-bold'>Call</span>
                    <span className='font-bold'>987654321</span>
                    <span className='font-bold'>OR</span>
                    <span className='font-bold'>TestEmail@gmail.com</span>
                </div>
                <button className=" mx-auto border mt-4  bg-white text-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-green-600 hover:text-white transition text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer">
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </div>
        </div>
    );
};

export default Consult;
