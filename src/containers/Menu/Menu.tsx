import "./menu.css";
import { menuData } from "../../constants/data";
import MenuCard from "../../components/MenuCard";
import { useState } from "react";

const allCategories = ["all", ...new Set(menuData.map((item) => item.category))];

const Menu = () => {
	const [menuItems, setMenuItems] = useState(menuData);

	const filterItems = (category: string) => {
		if (category === "all") {
			setMenuItems(menuData);
			return;
		}

		const newItems = menuData.filter((item) => item.category === category);
		setMenuItems(newItems);
		return;
	};

	return (
		<section className="menu">
			<h1 className="title">Our Menu</h1>
			<div className="title-underline" />

			<ul className="menu__categories">
				{allCategories.map((category) => (
					<li key={category}>
						<button
							type="button"
							className="btn"
							onClick={() => filterItems(category)}>
							{category}
						</button>
					</li>
				))}
			</ul>

			<div className="menu__content">
				{menuItems.map((item) => (
					<MenuCard
						key={item.id}
						{...item}
					/>
				))}
			</div>
		</section>
	);
};
export default Menu;
