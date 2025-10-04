import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Courses from "./Courses"
import WebsiteSetting from "./WebsiteSetting"
import DashboardLayout from "./DashboardLayout"  
import Contact from "./Contact"
import Appointments from "./Appointments"
import Blog from "./Blog"

export default function DashboardRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>  
          <Route index element={<Home />} />   
          <Route path="home" element={<Home />} />
          <Route path="course" element={<Courses />} />
          <Route path="settings" element={<WebsiteSetting />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="blog" element={ <Blog/>} />
        </Route>
      </Routes>
    </>
  )
}