import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import axios from 'axios'

export default function BlogCards() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/blogs")
            .then(res => setBlogs(res.data))
            .catch(err => console.error(err))

    }, [])

    const { Title } = Typography

    return (
        <div className='w-full'>
            <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
                <Title level={3} className='text-3xl md:!text-5xl font-lg text-white '>Article</Title>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
                    <div className=''><i class="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>Blog</span></div>
                </div>
            </div>
            
            <div className='py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {blogs.map((post) => {
                        return (
                            <div key={post.id} className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border flex flex-col h-full'>
                                
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className='w-full h-48 object-cover' 
                                />

                                <div className='p-6 flex flex-col flex-grow'>
                                    
                                    <div className='flex items-center justify-between mb-4'>
                                        <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>
                                            {post.date ? new Date(post.date).toLocaleDateString("en-US", { 
                                                month: "short", 
                                                day: "numeric" 
                                            }) : "Jan 15"}
                                        </span>
                                        
                                        <span className='text-gray-500 text-sm'>
                                            <i className="fa-regular fa-comment mr-1"></i>
                                            {post.comments || 0}
                                        </span>
                                    </div>

                                    <h3 className='text-xl font-semibold text-gray-800 mb-3 leading-tight'>
                                        {post.title}
                                    </h3>

                                    <p className='text-gray-600 text-sm mb-4 line-clamp-2 flex-grow'>
                                        {post.excerpt || "Read this interesting article to learn more about the topic and gain valuable insights."}
                                    </p>

                                    <div className='flex items-center justify-between mt-auto'>
                                        <div className='flex items-center'>
                                            <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 text-sm font-medium mr-2'>
                                                {(post.author || 'A')[0]}
                                            </div>
                                            <span className='text-gray-700 text-sm font-medium'>
                                                {post.author || 'Admin'}
                                            </span>
                                        </div>

                                        <Link 
                                            to={`/blogs/${post._id}`}
                                            className='text-green-600 hover:text-green-700 font-medium text-sm transition-colors'
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}