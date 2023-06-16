import "./App.css";
import Form from "./components/Form/Form.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

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
			<Form onAddActivity={handleAddActivity}></Form>
		</div>
	);
}

export default App;
