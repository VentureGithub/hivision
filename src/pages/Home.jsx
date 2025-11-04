import React from 'react'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/About'
import CoursesSection from '../components/home/CoursesSection'
import Achievement from '../components/home/Achievement'
import RegisterPage from '../components/home/RegisterPage'
import TeacherSection from '../components/home/TeacherSection'
import MissionVisionValues from '../components/home/MissionVisionValues'
import CourseFeatures from '../components/home/CourseFeatures'
import HiVisionDifference from '../components/home/HiVisionDifference'
import FounderTestimonial from '../components/home/FounderTestimonial'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <MissionVisionValues/>
    <CoursesSection/>
    <Achievement/>
    <FounderTestimonial/>
    <RegisterPage/>
    {/* <TeacherSection/> */}
    <CourseFeatures/>
    <HiVisionDifference/>
  
    </>
  )
}

export default Home