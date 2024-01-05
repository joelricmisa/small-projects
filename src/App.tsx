import Accordion from "./containers/Accordion";
import BirthdayList from "./containers/BirthdayList";
import JobTab from "./containers/JobTab";
import Menu from "./containers/Menu";
import Reviews from "./containers/Reviews";
import Tours from "./containers/Tours";

function App() {
	return (
		<>
			<JobTab />
			<Tours />
			<Reviews />
			<Menu />
			<BirthdayList />
			<Accordion />
		</>
	);
}

export default App;
