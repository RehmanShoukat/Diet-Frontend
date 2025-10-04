import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blogs from './Blogs'
import Appointment from './Appointment'
import Services from './Services'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='blogs/*' element={<Blogs />} />
                    <Route path='appointment' element={<Appointment />} />
                    <Route path='services' element={<Services />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
