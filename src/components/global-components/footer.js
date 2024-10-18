import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Copyright from './copyright';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function () {
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});


		$(document).on('click', '.theme-btn-1 ', function () {
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="ltn__footer-area  ">
				<div className="footer-top-area  section-bg-2 plr--5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-3 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-about-widget">
									<div className="footer-logo">
										<div className="site-logo">
											<img src={publicUrl + "assets/img/brand-logo/stayEase-Logo.webp"} alt="Logo" />
										</div>
									</div>
									<div className="footer-address">
										<ul>
											<li>
												<div className="footer-address-icon">
													<i className="icon-placeholder" />
												</div>
												<div className="footer-address-info">
													<p>​No. 216,215, 3rd Cross, Off Neeladri Road, Electronic City Phase 1, Bengaluru 560100 </p>
												</div>
											</li>
											<li>
												<div className="footer-address-icon">
													<i className="icon-call" />
												</div>
												<div className="footer-address-info">
													<p><a href="tel:+91 91 6464 8787">+91 91 6464 8787</a></p>
												</div>
											</li>
											<li>
											</li>
										</ul>
									</div>
									<div className="ltn__social-media mt-20">
										<ul>
											<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Company</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/about">About</Link></li>
											<li><Link to="/blog">Our Properties</Link></li>
											<li><Link to="/contact">Contact</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Services</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/about">Terms & Conditions</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Customer Care</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/contact">Contact us</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Copyright />
			</footer>
		)
	}
}

export default Footer_v1