import { MouseEventHandler, useState } from "react";
import "./tour-card.css";

export interface TourData {
	id: string;
	name: string;
	info: string;
	image: string;
	price: string;
}

interface TourDataWithEvent extends TourData {
	removeTour?: MouseEventHandler<HTMLButtonElement>;
}

const TourCard = (props: TourDataWithEvent) => {
	const { name, image, info, price, removeTour } = props;
	const [readMore, setReadMore] = useState(false);
	return (
		<li className="tour-card">
			<img
				className="tour-card__img"
				src={image}
				alt={name + " image"}
			/>
			<div className="tour-card__content">
				<h5 className="tour-card__title">{name}</h5>
				<span className="tour-card__price">₱{price}</span>
				<p className="tour-card__info">
					{readMore ? info : `${info.substring(0, 200)} ...`}
					<button
						className="tour-card__read-more"
						type="button"
						onClick={() => setReadMore(!readMore)}>
						{readMore ? "Show Less" : "Read More"}
					</button>
				</p>
				<button
					onClick={removeTour}
					className="btn tour-card__btn"
					type="button">
					Not Interested
				</button>
			</div>
		</li>
	);
};
export default TourCard;
