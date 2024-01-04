import AccordionCard from "../../components/AccordionCard";
import { accordionData } from "../../constants/data";
import "./accordion.css";

const Accordion = () => {
	return (
		<section className="accordion">
			<div className="accordion__content">
				<h1 className="accordion__title">Questions and answers about login</h1>
				<section className="accordion__questions">
					{accordionData.map((question) => (
						<AccordionCard
							key={question.id}
							{...question}
						/>
					))}
				</section>
			</div>
		</section>
	);
};
export default Accordion;
