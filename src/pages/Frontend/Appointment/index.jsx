import { Button, Card, DatePicker, Form, Input, Select, TimePicker, Typography } from 'antd'
import React, { useState } from 'react'
import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
import Subscribe from '../../../components/Subscribe';
import BlogSection from '../../../components/BlogSection';
import Testimonial from '../../../components/Testimonial';
import dayjs from 'dayjs';
import axios from 'axios';



const initialState = { department: "", doctor: "", name: "", phone: "", email: "", date: "", time: "", note: "" }



export default function index() {

    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)


    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(state)
        try {
            setLoading(true)
            const { data } = await axios.post("http://localhost:8000/api/appointments", state)
            if (data.success) {
                window.toastify("Your appointment request has been submitted and is pending approval. You will receive an email once approved.", "success");
            } else {
                window.toastify("someting went wrong while book an Appointment", "error");
            }

        } catch (error) {
            window.toastify(" Something went wrong!",
                "error")

        } finally {
            setLoading(false)
        }
    }

    const { TextArea } = Input
    const { Title } = Typography
    const { Option } = Select;

    return (
        <div className='w-full'>
            <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
                <Title level={3} className='text-3xl md:!text-5xl font-lg text-white '>Appointment</Title>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
                    <div className=''><i className="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>Appointment</span></div>
                </div>
            </div>
            <div className='w-full'>
                <div className='max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center mt-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32'>
                    <div className='bg-gray-50 rounded shadow-md p-6'>
                        <div className='text-3xl font-semibold text-center mb-12'>Book an Appointment</div>
                        <Form layout='vertical'>
                            <Form.Item
                                label="Select Department"
                                name="department"
                                rules={[{ required: true, message: "Please select a department!" }]}
                            >
                                <Select
                                    placeholder="Choose Department"
                                    size='large'
                                    onChange={(value) => setState(s => ({ ...s, department: value }))}
                                    value={state.department || undefined}
                                >
                                    <Option value="Nutrition">Nutrition</Option>
                                    <Option value="Cardiology">Cardiology</Option>
                                    <Option value="Dermatology">Dermatology</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Choose Doctor by Name"
                                name="doctor"
                                rules={[{ required: true, message: "Please select a doctor!" }]}
                            >
                                <Select
                                    placeholder="Choose Doctor"
                                    size="large"
                                    onChange={(value) => setState((s) => ({ ...s, doctor: value }))}
                                    value={state.doctor || undefined}
                                >
                                    <Option value='Naidan Smith'>Naidan Smith</Option>
                                    <Option value="Dr. John">Dr. John</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Enter Your Name">
                                <Input size="large" placeholder='Name' name="name" className="!py-4 !px-5 text-lg" onChange={handleChange} />
                            </Form.Item>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <Form.Item >
                                    <Input placeholder='Enter Your phone' size='large' name="phone" className='!py-4 !px-5 !text-lg' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item label=''>
                                    <Input placeholder='Enter Your Email' size='large' name="email" className='!py-4 !px-5 !text-lg' onChange={handleChange} />
                                </Form.Item>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <Form.Item>
                                    <DatePicker format="DD/MM/YYYY" className='w-full text-lg !py-4' value={state.date ? dayjs(state.date, "DD/MM/YYYY") : null} onChange={(date, dateString) => setState(s => ({ ...s, date: dateString }))} />
                                </Form.Item>
                                <Form.Item>
                                    <TimePicker className='w-full !py-4 text-lg' value={state.time ? dayjs(state.time, "HH:mm") : null} onChange={(time, timeString) => setState(s => ({ ...s, time: timeString }))} />
                                </Form.Item>
                            </div>
                            <Form.Item>
                                <TextArea rows={4} placeholder='Type Appointment Note' onChange={handleChange} name="note" className='!py-6 text-lg' />
                            </Form.Item>
                            <Form.Item>
                                <Button className="!bg-lime-600 hover:bg-lime-700 !text-white w-full" loading={loading} disabled={loading} onClick={handleSubmit}>
                                    Book Appointment
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1752578660/1-8_izpryp.jpg" alt="Nutritrion" className='rounded shadow-md  w-full h-full  bg-cover' />
                    </div>

                </div>

            </div>
            <Testimonial />
            <BlogSection />
            <Subscribe />

        </div>
    )
}
