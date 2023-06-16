import "./Form.style.css";
import Button from "../Button/Button.js";

export default function Form({ onAddActivity }) {
	return (
		<form aria-labelledby="formHeading" onSubmit={onAddActivity}>
			<h2 id="formHeading">Add new Activity:</h2>
			<label htmlFor="name">Name:</label>
			<input name="name" id="name" type="text"></input>
			<label htmlFor="goodWeatherActivity">Good-weather activity:</label>
			<input
				type="checkbox"
				name="goodWeatherActivity"
				id="goodWeatherActivity"></input>
			<Button type="submit">Submit</Button>
		</form>
	);
}
