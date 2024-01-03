import "./reviews.css";
import { reviewsData } from "../../constants/data";
import ReviewCard from "../../components/ReviewCard";
import { useState } from "react";

const Reviews = () => {
	const [index, setIndex] = useState(0);

	const checkNumber = (number: number) => {
		if (number > reviewsData.length - 1) {
			return 0;
		}

		if (number < 0) {
			return reviewsData.length - 1;
		}

		return number;
	};

	const prevData = () => {
		setIndex(() => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	const nextData = () => {
		setIndex(() => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};

	const randomData = () => {
		let newIndex = Math.floor(Math.random() * reviewsData.length);

		if (newIndex === index) {
			newIndex + 1;
		}

		setIndex(checkNumber(newIndex));
	};

	return (
		<section className="reviews">
			<h1 className="title">Our Reviews</h1>
			<p className="title-underline"></p>
			<ReviewCard
				index={index}
				prevData={prevData}
				nextData={nextData}
				randomData={randomData}
			/>
		</section>
	);
};
export default Reviews;
