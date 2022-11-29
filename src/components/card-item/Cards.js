import React from "react";
import "./Cards.styles.css";
import CardItem from "./CardItem";
import img9 from "../../assets/images/img-9.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img8 from "../../assets/images/img-8.jpg";

function Cards() {
	return (
		<div className="cards">
			<h1>Services</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src={img9} text="Leasure" label="" path="/services" />
						<CardItem
							src={img2}
							text="Group Travel"
							label=""
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={img3}
							text="Business Travel"
							label=""
							path="/services"
						/>
						<CardItem
							src={img4}
							text="Events Management"
							label=""
							path="/products"
						/>
						<CardItem src={img8} text="Exclusive" label="" path="/sign-up" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
