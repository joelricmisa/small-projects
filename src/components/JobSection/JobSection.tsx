import { FaAngleDoubleRight } from "react-icons/fa";
import "./job-section.css";

export type JobData = {
	id: string;
	order: number;
	title: string;
	dates: string;
	duties: string[];
	company: string;
};

const JobSection = (props: JobData) => {
	const { title, dates, duties, company } = props;
	return (
		<article className="job-section">
			<h2 className="job-section__title">{title}</h2>
			<h4 className="job-section__company">{company}</h4>
			<p className="job-section__dates">{dates}</p>
			<ul className="job-section__duties">
				{duties.map((duty) => (
					<li
						key={duty}
						className="job-section__duty">
						<FaAngleDoubleRight className="job-section__icon" />
						<p>{duty}</p>
					</li>
				))}
			</ul>
			<button
				type="button"
				className="btn">
				More Info
			</button>
		</article>
	);
};
export default JobSection;
