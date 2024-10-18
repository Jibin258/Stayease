import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Banner extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__slider-area ltn__slider-3 section-bg-1 go-top" style={{ marginBottom: '8rem' }}>
			<div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">

				{/* ltn__slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
					<div className="ltn__slide-item-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 align-self-center">
									<div className="slide-item-info">
										<div className="slide-item-info-inner ltn__slide-animation">
											<h1 className="animated">EXPERIENCE CO-LIVING <br />LIKE NEVER BEFORE!</h1>
											<div className="slide-brief animated">
												<p>Experience a new way of living with a vibrant community and all-inclusive amenities designed for modern lifestyles.</p>
											</div>
											<div className="btn-wrapper animated ">
												<Link to="/contact" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
											</div>
										</div>
									</div>
									<div className="slide-item-img">
										<img src={publicUrl + "assets/img/banner/banner_img.jpg"} alt="#" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Banner