import "./reviewcard.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { reviewsData } from "../../constants/data";
interface ReviewData {
	index: number;
	prevData: React.MouseEventHandler<HTMLButtonElement>;
	nextData: React.MouseEventHandler<HTMLButtonElement>;
	randomData: React.MouseEventHandler<HTMLButtonElement>;
}

const ReviewCard = (props: ReviewData) => {
	const { index, prevData, nextData, randomData } = props;
	const { name, image, job, text } = reviewsData[index];
	return (
		<div className="review-card">
			<div className="review-card__img-container">
				<img
					className="review-card__img"
					src={image}
					alt=""
				/>
				<span className="review-card__quote-icon">
					<FaQuoteRight />
				</span>
			</div>

			<h4 className="review-card__name">{name}</h4>
			<h6 className="review-card__job text-small">{job}</h6>
			<p className="review-card__info">{text}</p>
			<div className="review-card__btns">
				<button
					type="button"
					onClick={prevData}>
					<FaChevronLeft />
				</button>
				<button
					type="button"
					onClick={nextData}>
					<FaChevronRight />
				</button>
			</div>
			<button
				type="button"
				className="btn"
				onClick={randomData}>
				Surprise Me
			</button>
		</div>
	);
};
export default ReviewCard;
