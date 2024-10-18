import React from 'react'
import NavbarV2 from './global-components/navbar-v2'
import PageHeader from './global-components/page-header'
import AboutV1 from './section-components/about-v1'
import Footer from './global-components/footer'


const About_v1 = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="About Us" />
        <AboutV1 property = 'btn-wrapper animated go-top d-none'/>
        <Footer />
    </div>
}

export default About_v1