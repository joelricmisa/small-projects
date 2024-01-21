import Accordion from "./containers/Accordion";
import BirthdayList from "./containers/BirthdayList";
import JobTab from "./containers/JobTab";
import Menu from "./containers/Menu";
import Reviews from "./containers/Reviews";
import Slider from "./containers/Slider";
import Tours from "./containers/Tours";
import { createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Root";
import RootIndex from "./containers/RootIndex";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<RootIndex />}
			/>
			<Route
				path="slider"
				element={<Slider />}
			/>
			<Route
				path="jobtab"
				element={<JobTab />}
			/>
			<Route
				path="tours"
				element={<Tours />}
			/>
			<Route
				path="reviews"
				element={<Reviews />}
			/>
			<Route
				path="menu"
				element={<Menu />}
			/>
			<Route
				path="birthdaylist"
				element={<BirthdayList />}
			/>
			<Route
				path="accordion"
				element={<Accordion />}
			/>
			<Route path="*" />
		</Route>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
