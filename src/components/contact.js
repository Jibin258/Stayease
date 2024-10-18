import React from 'react'
import NavbarV2 from './global-components/navbar-v2'
import PageHeader from './global-components/page-header'
import ContactInfo from './section-components/contact-info'
import Footer from './global-components/footer'

const ContactV1 = () => {
    return <div>
        <NavbarV2/>
        <PageHeader headertitle="Contact Us" subheader="Contact" />
        <ContactInfo />
        <Footer />
    </div>
}

export default ContactV1