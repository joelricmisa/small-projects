import { useState } from "react";
import BirthdayCard from "../../components/BirthdayCard";
import { birthdayData } from "../../constants/data";
import "./bdaylist.css";
import { Person } from "../../components/BirthdayCard/BirthdayCard";

type BdayData = Person[] | null;

const BirthdayList = () => {
	const [data, setData] = useState<BdayData>(birthdayData);
	return (
		<section className="bg">
			<div className="bday-list">
				<h1 className="bday-list__heading">{data && data.length} birthdays today</h1>
				<ul className="bday-list__content">
					{data &&
						data.map((person) => (
							<BirthdayCard
								key={person.id}
								{...person}
							/>
						))}
				</ul>
				<button
					type="button"
					className="btn bday-list__btn"
					onClick={() => setData([])}>
					Clear All
				</button>
			</div>
		</section>
	);
};
export default BirthdayList;
