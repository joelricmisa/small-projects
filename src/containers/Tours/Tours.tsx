import { useEffect, useState } from "react";
import "./tours.css";
import TourCard, { TourData } from "../../components/TourCard/TourCard";

type Tours = TourData[] | null;

const Tours = () => {
	const URL = "https://course-api.com/react-tours-project";
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<Tours>(null);

	const fetchTours = async () => {
		setIsLoading(true);

		try {
			const response = await fetch(URL);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const tours = await response.json();

			setData(tours);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	const removeTour = (id: string): void => {
		if (data) {
			const newTours = data.filter((tour) => tour.id !== id);
			setData(newTours);
		}
		console.log(data);
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<section className="tours">
				<p className="loading"></p>
			</section>
		);
	}

	if (data?.length === 0) {
		return (
			<section className="tours">
				<h1 className="title tours__title">No Tours</h1>
				<div className="title-underline"></div>

				<button
					type="button"
					className="btn tours__btn"
					onClick={fetchTours}>
					Refresh Data
				</button>
			</section>
		);
	}

	return (
		<section className="tours">
			<h1 className="title tours__title">Our Tours</h1>
			<div className="title-underline"></div>

			{data && (
				<ul className="tours__content">
					{data.map((tour) => (
						<TourCard
							key={tour.id}
							{...tour}
							removeTour={() => removeTour(tour.id)}
						/>
					))}
				</ul>
			)}
		</section>
	);
};
export default Tours;
