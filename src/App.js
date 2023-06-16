import "./App.css";
import Form from "./components/Form/Form.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List/List";

function App() {
	const [activities, setActivities] = useLocalStorageState("activities", {
		defaultValue: [],
	});

	function handleAddActivity(newActivity) {
		newActivity = { ...newActivity, id: uid() };
		setActivities([newActivity, ...activities]);
	}
	const isGoodWeather = false;
	const filteredActivities = activities.filter(
		(activity) => activity.isForGoodWeather === isGoodWeather
	);

	return (
		<div className="App">
			<List activities={filteredActivities} isGoodWeather={isGoodWeather} />
			<Form onAddActivity={handleAddActivity} />
		</div>
	);
}

export default App;
