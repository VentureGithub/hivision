import React from 'react'
import Banner from '../components/Banner'
import TeacherSection from '../components/home/TeacherSection'
import FounderSection from '../components/home/FounderTestimonial'
import FunFact from '../components/about/FunFact'
import FeatureSection from '../components/about/FeatureSection'
import AboutUs from '../components/about/AboutUs'
import WhyJoin from '../components/about/WhyJoin'
import OfficeGallery from '../components/about/OfficeGallery'

const About = () => {
  return (
    <>
      <Banner
        backgroundImage="/3webbanner.png"
        title="About Us"
        description="Discover how HI-VISION fosters innovation, practical skills, and a brighter future through expert-led training, inclusive growth, and a commitment to educational excellence."
        breadcrumb1={{ label: "Home", path: "/" }}
        breadcrumb2={{ label: "About Us", path: "/about" }}
      />
      <AboutUs />
      <FeatureSection />
      <OfficeGallery/>
      <WhyJoin />
      {/* <TeacherSection /> */}
      <FunFact />
      <FounderSection />
    </>
  )
}

export default About