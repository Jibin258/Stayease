import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutV1 extends Component {

	render() {

		const { property } = this.props;

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__about-us-area pb-90 ">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
						<div className="about-us-img-wrap about-img-left">
							<img src={publicUrl + "assets/img/about-us/aboutUs-img.jpg"} alt="" />
						</div>
					</div>
					<div className="col-lg-6 align-self-center">
						<div className="about-us-info-wrap">
							<div className="section-title-area ltn__section-title-2--- mb-20">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
								<p>At Stayease, we're redefining the co-living experience by providing our guests with fully furnished, high-end, and affordable co-living spaces, catering to all types of people. We focus on ensuring top-quality stays, where we take care of all your needs. Find your perfect fit, from studios to shared spaces, all designed for comfort and community. </p>
							</div>
							<div className={property ? property : 'btn-wrapper animated go-top'}>
								<Link to="/about" className="theme-btn-1 btn btn-effect-1">READ MORE</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default AboutV1