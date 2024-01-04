import "./menu-card.css";

type MenuData = {
	id: number;
	title: string;
	category: string;
	price: number;
	img: string;
	desc: string;
};

const MenuCard = (props: MenuData) => {
	const { title, img, price, desc } = props;
	return (
		<article className="menu-card">
			<img
				className="menu-card__img"
				src={img}
				alt={title + "image"}
			/>
			<section className="menu-card__content">
				<header>
					<h2 className="menu-card__title">{title}</h2>
					<span className="menu-card__price">${price}</span>
				</header>
				<p className="menu-card__desc">{desc}</p>
			</section>
		</article>
	);
};
export default MenuCard;
