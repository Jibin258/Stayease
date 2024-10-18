import React from 'react'
import NavbarV2 from './global-components/navbar-v2'
import PageHeader from './global-components/page-header'
import BlogGrid from './blog-components/blog-grid'
import Footer from './global-components/footer'

const BlogRightSidebarPage = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="Our Properties" subheader="Our Properties" />
        <BlogGrid />
        <Footer />
    </div>
}

export default BlogRightSidebarPage