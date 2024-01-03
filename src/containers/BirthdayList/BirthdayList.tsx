import { useState } from "react";
import BirthdayCard from "../../components/BirthdayCard";
import { birthdayData } from "../../constants/data";
import "./bdaylist.css";
import { Person } from "../../components/BirthdayCard/BirthdayCard";

type BdayData = Person[] | null;

const BirthdayList = () => {
	const [data, setData] = useState<BdayData>(birthdayData);
	return (
		<div className="list">
			{/* <div className="list__bg"></div> */}
			<h1 className="list__heading">{data && data.length} birthdays today</h1>
			<ul className="list__content">
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
				className="list__btn"
				onClick={() => setData([])}>
				Clear All
			</button>
		</div>
	);
};
export default BirthdayList;
