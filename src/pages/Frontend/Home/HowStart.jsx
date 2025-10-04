import { Card, Typography } from 'antd';
import React from 'react'

const HowStart = () => {

    const { Title, Paragraph } = Typography


    const steps = [
        {
            id: '01',
            title: 'Weight Loss ',
            desc: 'Burn fat, build healthy habits, and transform your body with our structured weight loss program.',
            icon: 'fas fa-apple-alt',
        },
        {
            id: '02',
            title: 'Fitness Performance',
            desc: 'Enhance your strength, stamina, and overall health with personalized workouts and expert fitness guidance.',
            icon: 'fas fa-dumbbell',
        },
        {
            id: '03',
            title: 'Personal Coaching',
            desc: 'Achieve your fitness goals faster with one-on-one guidance, motivation, and  coaching sessions.',
            icon: 'fas fa-user-tie',
        },
        {
            id: '04',
            title: 'Child Nutrition',
            desc: 'Support your child’s growth with balanced meals, expert guidance, and essential healthy development.',
            icon: 'fas fa-clipboard-list',
        },
    ];


    return (
        <section className='bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-center shadow-xl'>
            <div className='text-center'>
                <div className='flex items-center justify-center gap-3 mb-4 '>
                    <div className='w-1 h-5 bg-green-500'></div>
                    <p className='text-green-500 uppercase font-semibold text-lg'>HOW TO START</p>
                </div>
                <h2 className='!text-3xl md:!text-4xl font-semibold'>It's Easy To Start Today!</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mt-18'>
                {steps.map((step) => {
                    return <Card key={step.id} bordered={false} className=' !shadow-lg hover:!shadow-2xl  transition duration-300 !bg-gray-100 '>
                        <div className='flex flex-col gap-3 h-full items-start text-left space-y-2'>
                            <div className='flex justify-between items-center w-full'>
                            <div className='text-green-500'>
                                <i className={`${step.icon} text-5xl`}></i>
                            </div>
                            <div className='text-gray-500 !text-4xl'>{step.id}</div>
                            </div>

                            <Title level={5} className="!m-0 font-sans !text-2xl">{step.title}</Title>
                            <Paragraph className='!text-lg text-gray-500 self-start'>{step.desc}</Paragraph>
                           <div><a href="" className='!text-green-500 !underline hover:underline-offset-2 font-bold self-start text-xl'>Read More</a></div> 
                        </div>
                    </Card>
                })}
            </div>
        </section>
    )
}

export default HowStart

