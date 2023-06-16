import "./Form.style.css";
import Button from "../Button/Button.js";

export default function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data.isForGoodWeather) {
      data.isForGoodWeather = true;
    } else {
      data.isForGoodWeather = false;
    }
    e.target.reset();
    e.target.name.focus();
    onAddActivity(data);
  }

  return (
    <form aria-labelledby="formHeading" onSubmit={handleSubmit}>
      <h2 id="formHeading">Add new Activity:</h2>
      <label htmlFor="name">Name:</label>
      <input name="name" id="name" type="text" required></input>
      <label htmlFor="isForGoodWeather">Good-weather activity:</label>
      <input
        type="checkbox"
        name="isForGoodWeather"
        id="isForGoodWeather"
      ></input>
      <Button type="submit">Submit</Button>
    </form>
  );
}
