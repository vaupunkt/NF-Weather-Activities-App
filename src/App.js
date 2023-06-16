import "./App.css";
import Form from "./components/Form/Form.js";

function App() {
	function handleAddActivity(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		console.log(data);
		e.target.reset();
		e.target.name.focus();
	}

	return <Form onAddActivity={handleAddActivity}></Form>;
}

export default App;
