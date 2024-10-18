import React, { Component } from 'react'

class BlogGrid extends Component {
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		return (
			<div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
				<div className="container">
					<div className="row">
						
						{/* Blog Item */}
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="ltn__product-item ltn__product-item-4 text-center---">
								<div className="product-img go-top">
									<img src={publicUrl + "assets/img/product/property-img1.webp"} alt="#" />
									<div className="product-badge">
										<ul>
											<li className="sale-badge bg-green">BOOK NOW</li>
										</ul>
									</div>
									<div className="product-img-location-gallery">
										<div className="product-img-location">
											<ul>
												<li>
													<i className="flaticon-pin" /> Belmont Gardens, Chicago
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="product-info">
									<div className="product-price">
										<span>$34,900<label>/Month</label></span>
									</div>
								</div>
							</div>
						</div>

						{/* Blog Item */}
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="ltn__product-item ltn__product-item-4 text-center---">
								<div className="product-img go-top">
									<img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="#" />
									<div className="product-badge">
										<ul>
											<li className="sale-badge bg-green">BOOK NOW</li>
										</ul>
									</div>
									<div className="product-img-location-gallery">
										<div className="product-img-location">
											<ul>
												<li>
													<i className="flaticon-pin" /> Belmont Gardens, Chicago
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="product-info">
									<div className="product-price">
										<span>$34,900<label>/Month</label></span>
									</div>
								</div>
							</div>
						</div>

						{/* Blog Item */}
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="ltn__product-item ltn__product-item-4 text-center---">
								<div className="product-img go-top">
									<img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="#" />
									<div className="product-badge">
										<ul>
											<li className="sale-badge bg-green">BOOK NOW</li>
										</ul>
									</div>
									<div className="product-img-location-gallery">
										<div className="product-img-location">
											<ul>
												<li>
													<i className="flaticon-pin" /> Belmont Gardens, Chicago
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="product-info">
									<div className="product-price">
										<span>$34,900<label>/Month</label></span>
									</div>
								</div>
							</div>
						</div>

						{/* Blog Item */}
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="ltn__product-item ltn__product-item-4 text-center---">
								<div className="product-img go-top">
									<img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="#" />
									<div className="product-badge">
										<ul>
											<li className="sale-badge bg-green">BOOK NOW</li>
										</ul>
									</div>
									<div className="product-img-location-gallery">
										<div className="product-img-location">
											<ul>
												<li>
													<i className="flaticon-pin" /> Belmont Gardens, Chicago
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="product-info">
									<div className="product-price">
										<span>$34,900<label>/Month</label></span>
									</div>
								</div>
							</div>
						</div>

						{/* Blog Item */}
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="ltn__product-item ltn__product-item-4 text-center---">
								<div className="product-img go-top">
									<img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="#" />
									<div className="product-badge">
										<ul>
											<li className="sale-badge bg-green">BOOK NOW</li>
										</ul>
									</div>
									<div className="product-img-location-gallery">
										<div className="product-img-location">
											<ul>
												<li>
													<i className="flaticon-pin" /> Belmont Gardens, Chicago
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="product-info">
									<div className="product-price">
										<span>$34,900<label>/Month</label></span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

		)
	}
}

export default BlogGrid