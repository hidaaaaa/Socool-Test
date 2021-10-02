import { Image } from "antd";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DEFAULT_RESPONSIVE } from "utils/constant";
import "./style/index.scss";

const CustomCarousel = ({ ...props }) => {
	return (
		<Carousel
			className="img-wrap"
			showDots={true}
			responsive={DEFAULT_RESPONSIVE}
			swipeable
			draggable
			removeArrowOnDeviceType={["mobile", "tablet"]}
		>
			{!!props.data
				? props.data.map((img) => {
						return (
							<Image
								src={`${process.env.REACT_APP_BASE_API}${img.url}`}
								key={img.id}
								className="customCarousel__photo"
							/>
						);
				  })
				: [].map((img) => {
						return (
							<Image
								src={`${process.env.REACT_APP_BASE_API}${img.url}`}
								key={img.id}
								className="customCarousel__photo"
							/>
						);
				  })}
		</Carousel>
	);
};

export default CustomCarousel;
