import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./accordion-card.css";
import { useState } from "react";

type accordionData = {
	id: number;
	title: string;
	info: string;
};

const AccordionCard = (props: accordionData) => {
	const { title, info } = props;
	const [isShow, setIsShow] = useState(false);

	return (
		<article className="accordion-card">
			<header>
				<h2 className="accordion-card__title">{title}</h2>
				<button
					type="button"
					className="accordion-card__btn"
					onClick={() => setIsShow(!isShow)}>
					{isShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{isShow ? <p className="accordion-card__info">{info}</p> : null}
		</article>
	);
};
export default AccordionCard;
