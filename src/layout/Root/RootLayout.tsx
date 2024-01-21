import { Link, Outlet } from "react-router-dom";
import "./root-layout.css";
import { linksData } from "../../constants/data";

const RootLayout = () => {
	return (
		<section className="root-layout">
			<header>
				<Link to="/">
					<h1>Small Projects</h1>
				</Link>
				<nav>
					<ul>
						{linksData.map((link, index) => (
							<li key={link.name + index}>
								<Link to={link.href}>
									<p>{link.name}</p>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<div className="root-content">
				<Outlet />
			</div>
		</section>
	);
};

export default RootLayout;
