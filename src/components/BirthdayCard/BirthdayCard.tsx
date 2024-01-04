import "./bday-card.css";

export type Person = {
	id: number;
	name: string;
	age: number;
	image: string;
};

const BirthdayCard = (props: Person) => {
	const { name, age, image } = props;

	return (
		<li className="bday-card">
			<img
				className="bday-card__image"
				src={image}
				alt={name + " profile picture"}
			/>
			<div className="bday-card__texts">
				<h3 className="bday-card__name">{name}</h3>
				<p className="bday-card__age">{age} years</p>
			</div>
		</li>
	);
};
export default BirthdayCard;
