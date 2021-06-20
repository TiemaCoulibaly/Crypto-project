import React from "react";
import "./currency.scss";
import ChartCard from "./ChartCard.js";
import Slider from "react-slick";

const Currency = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		autoplay: true,
		speed: 15000,
		autoplaySpeed: 15000,
		cssEase: "linear",
		pauseOnHover: true,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Slider {...settings}>
				<ChartCard name="bitcoin" />
				<ChartCard name="ethereum" />
				<ChartCard name="litecoin" />
				<ChartCard name="dogecoin" />
				<ChartCard name="cosmos" />
				<ChartCard name="metal" />
			</Slider>
		</>
	);
};

export default Currency;
