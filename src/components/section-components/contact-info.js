import React, { Component } from 'react'

class ContactInfo extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__contact-address-area mb-90">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
							<div className="ltn__contact-address-icon">
								<img src={publicUrl + "assets/img/icons/10.png"} alt="Icon Image" />
							</div>
							<h3>Email Address</h3>
							<p>info@webmail.com</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
							<div className="ltn__contact-address-icon">
								<img src={publicUrl + "assets/img/icons/11.png"} alt="Icon Image" />
							</div>
							<h3>Phone Number</h3>
							<p>+91 91 6464 8787</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
							<div className="ltn__contact-address-icon">
								<img src={publicUrl + "assets/img/icons/12.png"} alt="Icon Image" />
							</div>
							<h3>Office Address</h3>
							<p>Estanzia Ease Private Limited <br />No. 216,215, 3rd Cross, Off Neeladri Road, Electronic City Phase 1, Bengaluru 560100 </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ContactInfo