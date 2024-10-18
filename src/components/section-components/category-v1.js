import React, { Component } from 'react'
import { IoLocation } from "react-icons/io5"
import { RiSofaFill } from "react-icons/ri"
import { LuParkingCircle } from "react-icons/lu"
import { MdOutlineCleaningServices } from "react-icons/md"
import { FaWifi } from "react-icons/fa"
import { FaKitchenSet } from "react-icons/fa6"
import { TbDeviceCctv } from "react-icons/tb"
import { GiWashingMachine } from "react-icons/gi"
import { BsPersonWorkspace } from "react-icons/bs"
import { CgCommunity } from "react-icons/cg"
import { FaHouseLock } from "react-icons/fa6"
import { FaHandHoldingWater } from "react-icons/fa"
import { MdLiveTv } from "react-icons/md"
import { SiIntercom } from "react-icons/si"

class CategoryV1 extends Component {

	render() {

		return <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-90 go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Aminities</h6>
							<h1 className="section-title">Building Aminities</h1>
						</div>
					</div>
				</div>
				<div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><IoLocation /></span>
							<span className="category-title">Prime Locations</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><RiSofaFill /></span>
							<span className="category-title">Fully Furnished</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><LuParkingCircle /></span>
							<span className="category-title">Parking Space</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><MdOutlineCleaningServices /></span>
							<span className="category-title">Regular Housekeeping</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><FaWifi /></span>
							<span className="category-title">Free Wi-Fi</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><FaKitchenSet /></span>
							<span className="category-title">Modular Kitchen</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><TbDeviceCctv /></span>
							<span className="category-title">CCTV Surveillance</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><GiWashingMachine /></span>
							<span className="category-title">Washing Machine</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><BsPersonWorkspace /></span>
							<span className="category-title">Workspace Setup</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><CgCommunity /></span>
							<span className="category-title">Common Area</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><FaHouseLock /></span>
							<span className="category-title">Digital Lock Access</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><FaHandHoldingWater /></span>
							<span className="category-title">Water Purifier</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><MdLiveTv /></span>
							<span className="category-title">OTT Subscriptions</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="ltn__category-item ltn__category-item-5 text-center">
							<span className="category-icon"><SiIntercom /></span>
							<span className="category-title">Community Intercom</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default CategoryV1