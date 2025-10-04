import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogCards from './BlogCards'
import Details from './Details'

export default function index() {
    return (
        <Routes>
            <Route index element={<BlogCards />} />
            <Route path=':id' element={<Details />} />
        </Routes>
    )
}
