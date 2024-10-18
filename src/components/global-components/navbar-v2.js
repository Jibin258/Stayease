import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavbarV2 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		return (
			<div>
				<header className={"bg-secondary ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- "}>

					{/* ltn__header-top-area end */}
					{/* ltn__header-middle-area start */}
					<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="site-logo-wrap">
										<div className="site-logo go-top">
											<NavLink to="/"><img src={publicUrl + "assets/img/brand-logo/stayEase-Logo.webp"} alt="Logo" /></NavLink>
										</div>
									</div>
								</div>
								<div className="col header-menu-column">
									<div className="header-menu d-none d-xl-block go-top">
										<nav>
											<div className="ltn__main-menu">
												<ul>
													<li className="menu-icon"><NavLink exact to="/" activeClassName="active-link">Home</NavLink>
													</li>
													<li className="menu-icon"><NavLink to="/about" activeClassName="active-link">About</NavLink>
													</li>
													<li className="menu-icon"><NavLink to="/blog" activeClassName="active-link">Our Properties</NavLink>
													</li>
													<li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
													<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
												</ul>
											</div>
										</nav>
									</div>
								</div>
								<div className="col--- ltn__header-options ltn__header-options-2 ">
									{/* Mobile Menu Button */}
									<div className="position-relative mobile-menu-toggle d-xl-none">
										<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
											<div className="position-absolute top-50 start-50 translate-middle" type="button">
												<i className="fas fa-bars"></i>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ltn__header-middle-area end */}
				</header>
				<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
					<div className="ltn__utilize-menu-inner ltn__scrollbar">
						<div className="ltn__utilize-menu-head bg-secondary">
							<div className="site-logo">
								<NavLink to="/"><img src={publicUrl + "assets/img/brand-logo/stayEase-Logo.webp"} alt="Logo" /></NavLink>
							</div>
							<button className="ltn__utilize-close">×</button>
						</div>
						<div className="ltn__utilize-menu">
							<ul>
								<li><NavLink exact to="/" activeClassName="active-link">Home</NavLink>
								</li>
								<li><NavLink to="/about" activeClassName="active-link">About</NavLink>
								</li>
								<li><NavLink to="/blog" activeClassName="active-link">Our Properties</NavLink>
								</li>
								<li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
							</ul>
						</div>
						<div className="ltn__social-media-2">
							<ul>
								<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NavbarV2