import React from 'react'
import Banner from '../components/Banner'
import Form from '../components/contact/Form'
import InfoCards from '../components/contact/InfoCards'

const Contact = () => {
  return (
    <>
      <Banner
        backgroundImage="/3webbanner.png"
        title="Contact Us"
        description="Get in touch with Hi-Vision for any queries, collaborations, or support. We’re here to help you with course details, admissions, and all your learning needs."
        breadcrumb1={{ label: "Home", path: "/" }}
        breadcrumb2={{ label: "Contact Us", path: "/contact" }}
      />
      <Form />
      <InfoCards/>
    </>
  )
}

export default Contact