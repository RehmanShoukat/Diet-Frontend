import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

export default function Details() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [recentBlogs, setRecentBlogs] = useState([]);
  const { Title } = Typography;

  // Fetch blog details
  const fetchPost = () => {
    axios.get(`http://localhost:8000/blogs/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  };

  // Fetch recent blogs for sidebar
  const fetchRecentBlogs = () => {
    axios.get('http://localhost:8000/blogs')
      .then(res => {
        // Filter out current blog and get only 5 recent blogs
        const filtered = res.data
          .filter(blog => blog._id !== id)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);
        setRecentBlogs(filtered);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchPost();
    fetchRecentBlogs();
  }, [id]);

  if (!post) return <div className='p-6'>Loading...</div>;

  // Handle comment form submit
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = { 
      text: newComment, 
      name: 'Anonymous', 
      date: new Date().toISOString()
    };
    
    const updatedComments = post.comments && Array.isArray(post.comments) 
      ? [...post.comments, comment] 
      : [comment];

    // Update local state immediately
    setPost({ ...post, comments: updatedComments });
    setNewComment('');

    // Update backend
    axios.put(`http://localhost:8000/blogs/${id}`, { ...post, comments: updatedComments })
      .catch(err => {
        console.error(err);
        // Revert on error
        fetchPost();
      });
  };

  return (
    <div className='w-full'>
      {/* Header */}
      <div
        className='bg-cover bg-no-repeat bg-center h-[200px] md:h-[300px] flex flex-col justify-center px-4 sm:px-6 md:px-10'
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')`,
        }}
      >
        <Title level={1} className='text-2xl md:!text-4xl lg:!text-5xl text-white'>Article</Title>
        <div className='flex flex-wrap gap-3 mt-3 text-sm text-white'>
          <Link to='/' className='hover:text-green-300 flex items-center gap-1'>
            <i className='fa-solid fa-house'></i> Home
          </Link>
          <span className='flex items-center gap-1'>
            <i className='fa-solid fa-chevron-right text-xs'></i> Blogs
          </span>
        </div>
      </div>

      <div className='px-4 sm:px-6 lg:px-10 py-10 max-w-7xl mx-auto'>
        
        {/* Main Layout with Left Content and Right Sidebar */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          
          {/* Left Column - Main Article Content */}
          <div className='lg:col-span-2'>
            <img
              src={post.image}
              alt={post.title}
              className='w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover rounded-lg mb-8'
            />

            <div className='flex flex-wrap gap-4 items-center mb-6'>
              <span className='bg-green-500 text-white text-sm px-3 py-1 rounded'>
                {post.date ? new Date(post.date).toLocaleDateString() : 'Recent'}
              </span>
              <span className='text-sm text-gray-600 flex items-center gap-1'>
                <i className='fa-solid fa-user text-green-500'></i>
                {post.author || 'Admin'}
              </span>
              <span className='text-sm text-gray-600 flex items-center gap-1'>
                <i className='fa-solid fa-comments text-green-500'></i>
                {Array.isArray(post.comments) ? post.comments.length : 0} Comments
              </span>
            </div>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>{post.title}</h1>
            
            <div className='prose max-w-none mb-12'>
              <p className='text-base sm:text-lg leading-relaxed text-gray-700'>
                {post.content || post.description}
              </p>
            </div>

            {/* Comments Section */}
            <div className='pt-8 border-t border-gray-200'>
              <h3 className='text-2xl font-bold mb-6 text-gray-800'>
                Comments ({Array.isArray(post.comments) ? post.comments.length : 0})
              </h3>
              
              {/* Add Comment Form */}
              <div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
                <h4 className='text-lg font-semibold mb-4 text-gray-800'>Add a Comment</h4>
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    rows='4'
                    placeholder='Write your comment here...'
                    className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    required
                  ></textarea>
                  <div className='flex justify-end mt-4'>
                    <button
                      type='submit'
                      className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300'
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>

              {/* Display Comments */}
              <div className='space-y-4'>
                {post.comments && Array.isArray(post.comments) && post.comments.length > 0 && (
                  post.comments.map((comment, i) => (
                    <div key={i} className='bg-gray-50 border border-gray-200 p-4 rounded-lg'>
                      <div className='flex items-center gap-2 mb-2'>
                        <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold'>
                          {(comment.name || 'A')[0].toUpperCase()}
                        </div>
                        <span className='font-medium text-gray-800'>{comment.name || 'Anonymous'}</span>
                        <span className='text-xs text-gray-500'>
                          {comment.date ? new Date(comment.date).toLocaleDateString() : 'Just now'}
                        </span>
                      </div>
                      <p className='text-gray-700 ml-10'>{comment.text}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar with Recent Articles */}
          <div className='lg:col-span-1'>
            <div className='sticky top-8'>
              <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
                <h3 className='text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2'>
                  Recent Articles
                </h3>
                
                {recentBlogs.length > 0 ? (
                  <div className='space-y-4'>
                    {recentBlogs.map((blog) => (
                      <Link key={blog._id} to={`/blogs/${blog._id}`} className='block'>
                        <div className='flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-200'>
                          <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className='w-16 h-16 object-cover rounded-md flex-shrink-0' 
                          />
                          <div className='flex-1 min-w-0'>
                            <h4 className='text-sm font-semibold text-gray-800 line-clamp-2 mb-1'>
                              {blog.title}
                            </h4>
                            <p className='text-xs text-gray-500 mb-1'>
                              {blog.date ? new Date(blog.date).toLocaleDateString("en-US", { 
                                month: "short", 
                                day: "numeric",
                                year: "numeric"
                              }) : "Recent"}
                            </p>
                            <p className='text-xs text-gray-600 line-clamp-2'>
                              {blog.description ? blog.description.substring(0, 80) + "..." : "Read more..."}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className='text-gray-500 text-sm'>No recent articles found.</p>
                )}
              </div>

              {/* Additional sidebar widgets can be added here */}
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2'>
                  Categories
                </h3>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                    <span className='text-gray-600'>Technology</span>
                    <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs'>12</span>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                    <span className='text-gray-600'>Business</span>
                    <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs'>8</span>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                    <span className='text-gray-600'>Lifestyle</span>
                    <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs'>15</span>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <span className='text-gray-600'>Health</span>
                    <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs'>6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}