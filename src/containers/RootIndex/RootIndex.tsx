import { Link } from "react-router-dom";
import "./root-index.css";
import { linksData } from "../../constants/data";

const RootIndex = () => {
	return (
		<ul>
			{linksData.map((project) => {
				return (
					<li
						key={project.name}
						className="root-card">
						<Link to={project.href}>
							<img
								src={project.img}
								alt={project.name + " preview image"}
							/>
							<p>{project.name}</p>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default RootIndex;
