import React from 'react'
import Hero from './Hero'
import FeaturesCard from './FeaturesCard'
import MiddleSection from './MiddleSection'
import Nutrition from './Nutrition'
import Youtube from './Youtube'
import Diet from './Diet'
import Consult from './Consult'
import HowStart from './HowStart'
import Subscribe from '../../../components/Subscribe'
import BlogSection from '../../../components/BlogSection'
import Testimonial from '../../../components/Testimonial'

export default function index() {
    return (
        <>
            <Hero />
            <FeaturesCard />
            <MiddleSection/>
            <Nutrition/>
            <Youtube/>
            <Diet/>
            <Consult/>
            <HowStart/>
            <Subscribe/>
            <Testimonial/>
            <BlogSection/>
            
        </>
    )
}
