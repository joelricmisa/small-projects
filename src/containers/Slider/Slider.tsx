import "./slider.css";
import { reviewsData } from "../../constants/data";
import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = reviewsData[index];

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

	useEffect(() => {
		const slide = setInterval(() => {
			nextData();
		}, 3000);

		return () => clearInterval(slide);
	}, [index]);
	return (
		<section className="slider">
			<h1 className="title">Slider Reviews</h1>
			<div className="slider__content">
				<img
					className="slider__img"
					src={image}
					alt={name + " profile pic"}
				/>
				<div className="slider__info">
					<h2 className="slider__name">{name}</h2>
					<p className="slider__job">{job}</p>
					<p className="slider__desc">{text}</p>
				</div>

				<FaQuoteRight className="slider__icon" />

				<button
					type="button"
					className="btn slider__btn slider__btn--prev"
					onClick={prevData}>
					<FiChevronLeft />
				</button>
				<button
					type="button"
					className="btn slider__btn slider__btn--next"
					onClick={nextData}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
};
export default Slider;
