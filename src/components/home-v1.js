import React from 'react'
import NavbarV2 from './global-components/navbar-v2'
import Banner from './section-components/banner'
import Aboutv1 from './section-components/about-v1'
import ProSlider from './section-components/product-slider-v1'
import VideoV1 from './section-components/video-v1'
import Category from './section-components/category-v1'
import Footer from './global-components/footer'

const Home_V1 = () => {
    return <div>
        <NavbarV2 />
        <Banner />
        <Aboutv1 />
        <ProSlider />
        <VideoV1 />
        <Category />
        <Footer />
    </div>
}

export default Home_V1