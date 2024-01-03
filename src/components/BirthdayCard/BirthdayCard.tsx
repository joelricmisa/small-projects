import "./bdaycard.css";

export type Person = {
	id: number;
	name: string;
	age: number;
	image: string;
};

const BirthdayCard = (props: Person) => {
	const { name, age, image } = props;

	return (
		<li className="card">
			<img
				className="card__image"
				src={image}
				alt={name + " profile picture"}
			/>
			<div className="card__texts">
				<h3 className="card__name">{name}</h3>
				<p className="card__age">{age} years</p>
			</div>
		</li>
	);
};
export default BirthdayCard;
