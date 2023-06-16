import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List";

function App() {
	const [activities, setActivities] = useLocalStorageState("activities", {
		defaultValue: [],
	});

	function handleAddActivity(newActivity) {
		newActivity = { ...newActivity, id: uid() };
		setActivities([newActivity, ...activities]);
	}

	return (
		<div className="App">
			<List activities={activities} />
			<Form onAddActivity={handleAddActivity} />
		</div>
	);
}

export default App;
